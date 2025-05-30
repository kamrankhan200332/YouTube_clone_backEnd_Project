const express = require("express");
const { PORT, CORS_ORIGIN } = require("./config");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConnection = require("./db");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);

dbConnection();

app.listen(PORT || 8000, () => {
  console.log(`Server is running on http://localhost:${PORT || 8000}`);
});

app.get("/", (req, res) => {
  res.send("Server is ready...");
});
