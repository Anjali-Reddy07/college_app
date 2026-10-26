import mysql from "mysql2/promise";

/**
 * Global singleton pool for MySQL.
 * In development, hot-reloading (HMR) re-executes modules.
 * Keeping the pool on globalThis prevents opening new connections on every edit.
 * In serverless environments (Vercel), re-using the connection object per container
 * prevents exhausting Aiven's max connection limit.
 */

declare global {
  // eslint-disable-next-line no-var
  var _mysqlPool: mysql.Pool | undefined;
}

function createPool(): mysql.Pool {
  // Option 1: Direct Service URI (e.g., Aiven's DATABASE_URL or MYSQL_URI)
  // Format: mysql://avnadmin:password@mysql-xxxx.aivencloud.com:port/defaultdb?ssl-mode=REQUIRED
  const connectionUri = process.env.DATABASE_URL || process.env.MYSQL_URI;

  if (connectionUri) {
    return mysql.createPool({
      uri: connectionUri,
      ssl: {
        rejectUnauthorized: false, // Required for Aiven SSL in cloud/serverless environments
      },
      waitForConnections: true,
      connectionLimit: 5, // Keep small to avoid saturating Aiven's pool across Vercel functions
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 10000,
    });
  }

  // Option 2: Individual environment variables
  const host = process.env.DB_HOST || "localhost";
  const port = parseInt(process.env.DB_PORT || "3306", 10);
  const isAivenOrRemote =
    process.env.DB_SSL === "true" ||
    (host !== "localhost" && host !== "127.0.0.1");

  return mysql.createPool({
    host,
    port,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "defaultdb",
    ssl: isAivenOrRemote
      ? {
          rejectUnauthorized: false, // Aiven uses managed SSL certificates
        }
      : undefined,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000,
  });
}

const pool: mysql.Pool = globalThis._mysqlPool ?? (globalThis._mysqlPool = createPool());

export default pool;
