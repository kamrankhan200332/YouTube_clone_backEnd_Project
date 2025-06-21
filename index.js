const express = require("express");
const { PORT, CORS_ORIGIN } = require("./config");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConnection = require("./src/db");
const userRouter = require("./src/routes/user.routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// CORS configuration.
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);
// database connection.
dbConnection();
// Routes configuration.
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready...");
});

app.listen(PORT || 8000, () => {
  console.log(`Server is running on http://localhost:${PORT || 8000}`);
});
