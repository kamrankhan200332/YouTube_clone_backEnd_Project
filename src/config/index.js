const dotenv = require("dotenv").config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const CORS_ORIGIN = process.env.CORS_ORIGIN;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY;

module.exports = {
  PORT,
  DB_URL,
  CORS_ORIGIN,
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY,
};
