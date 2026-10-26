import { NextRequest } from "next/server";
import pool from "@/lib/db";
import { ResultSetHeader } from "mysql2";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/**
 * Ensures the contact_messages table exists in Aiven MySQL.
 * Automatically runs on first request so no manual database migration is needed.
 */
async function ensureTableExists() {
  const createTableSql = `
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50) DEFAULT NULL,
      subject VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `;
  await pool.execute(createTableSql);
}

/**
 * GET /api/contact
 * Health-check endpoint: verify database connectivity from Vercel / local
 */
export async function GET() {
  try {
    await pool.query("SELECT 1");
    return Response.json({
      status: "ok",
      connected: true,
      message: "Database connection successful.",
    });
  } catch (err: unknown) {
    const error = err as { code?: string; message?: string };
    return Response.json(
      {
        status: "error",
        connected: false,
        code: error.code,
        message: error.message || "Failed to connect to database.",
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/contact
 * Inserts a new contact inquiry into Aiven MySQL
 */
export async function POST(request: NextRequest) {
  // 1. Parse JSON body
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Invalid JSON request body." },
      { status: 400 }
    );
  }

  const { name, email, phone, subject, message } = body;

  // 2. Server-side validation
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return Response.json(
      { success: false, error: "Please fill in all required fields (Name, Email, Subject, Message)." },
      { status: 422 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return Response.json(
      { success: false, error: "Please provide a valid email address." },
      { status: 422 }
    );
  }

  // 3. Insert message into Aiven MySQL
  try {
    // Ensure table exists in case this is a fresh Aiven database
    await ensureTableExists();

    const insertSql = `
      INSERT INTO contact_messages (name, email, phone, subject, message)
      VALUES (?, ?, ?, ?, ?)
    `;

    const [result] = await pool.execute<ResultSetHeader>(insertSql, [
      name.trim(),
      email.trim(),
      phone?.trim() || null,
      subject.trim(),
      message.trim(),
    ]);

    return Response.json(
      {
        success: true,
        message: "Your message has been received! We'll get back to you within 24 hours.",
        id: result.insertId,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    const dbError = err as { code?: string; message?: string };
    console.error("[contact/route] Database error:", dbError);

    // Provide friendly diagnostics for cloud / Vercel deployment
    if (
      dbError.code === "ECONNREFUSED" ||
      dbError.code === "ETIMEDOUT" ||
      dbError.code === "ENOTFOUND"
    ) {
      return Response.json(
        {
          success: false,
          error: "Database host unreachable. Verify DB_HOST / DB_PORT / DATABASE_URL in environment variables.",
        },
        { status: 503 }
      );
    }

    if (dbError.code === "ER_ACCESS_DENIED_ERROR") {
      return Response.json(
        {
          success: false,
          error: "Database authentication failed. Please check DB_USER and DB_PASSWORD.",
        },
        { status: 401 }
      );
    }

    if (dbError.code === "HANDSHAKE_SSL_ERROR") {
      return Response.json(
        {
          success: false,
          error: "SSL Handshake failed with Aiven MySQL. Ensure SSL is enabled.",
        },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: false,
        error: dbError.message || "An unexpected server error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
