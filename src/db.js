import pg from "pg";

export const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  password: "5797",
  database: "nodepg",
  port: "5432",
});
