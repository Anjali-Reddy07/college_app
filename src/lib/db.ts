import mysql from "mysql2/promise";

declare global {
  // eslint-disable-next-line no-var
  var _mysqlPool: mysql.Pool | undefined;
}

function parseDatabaseUrl(urlStr: string) {
  try {
    const url = new URL(urlStr);
    return {
      host: url.hostname,
      port: url.port ? parseInt(url.port, 10) : 3306,
      user: decodeURIComponent(url.username),
      password: decodeURIComponent(url.password),
      database: url.pathname ? url.pathname.replace(/^\//, "") : "defaultdb",
    };
  } catch {
    return null;
  }
}

function createPool(): mysql.Pool {
  const uri = process.env.DATABASE_URL || process.env.MYSQL_URI;

  if (uri) {
    const parsed = parseDatabaseUrl(uri);
    if (parsed) {
      return mysql.createPool({
        host: parsed.host,
        port: parsed.port,
        user: parsed.user,
        password: parsed.password,
        database: parsed.database,
        ssl: {
          rejectUnauthorized: false,
        },
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 10000,
      });
    }

    return mysql.createPool({
      uri,
      ssl: {
        rejectUnauthorized: false,
      },
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
    });
  }

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
    ssl: isAivenOrRemote ? { rejectUnauthorized: false } : undefined,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000,
  });
}

const pool: mysql.Pool = globalThis._mysqlPool ?? (globalThis._mysqlPool = createPool());

export default pool;
