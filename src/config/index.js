const dotenv = require("dotenv").config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

module.exports = { PORT, DB_URL, CORS_ORIGIN };
