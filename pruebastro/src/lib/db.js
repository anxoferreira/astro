import { getSecret } from "astro:env/server";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: getSecret("MYSQL_HOST"),
  port: getSecret("MYSQL_PORT"),
  database: getSecret("MYSQL_DATABASE"),
  user: getSecret("MYSQL_USER"),
  password: getSecret("MYSQL_PASSWORD"),
});

export async function getAllProducts() {
  const [productos] = await pool.query(
    "Select id, nombre, precio from productos order by id",
  );
  return productos;
}
