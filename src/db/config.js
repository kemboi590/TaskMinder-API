import dotenv from "dotenv";
import assert from "assert";
dotenv.config();

const {
  PORT,
  SQL_SERVER,
  SQL_USER,
  SQL_PWD,
  SQL_DB,
  JWT_SECRET,
  MAIL_PASSWORD,
} = process.env;

// const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, "PORT is required");
// assert(HOST, "HOST is required");

const config = {
  port: PORT,
  // host: HOST,

  // url: HOST_URL,
  sql: {
    server: SQL_SERVER,
    user: SQL_USER,
    password: SQL_PWD,
    database: SQL_DB,
    options: {
      encrypt: true,
      trustServerCertificate: false
    },
  },
  jwt_secret: JWT_SECRET,
  mail_password: MAIL_PASSWORD,
};

export default config;
