const express = require("express");
const registerUser = require("../controllers/user.controller");
const upload = require("../middlewares/multer.middleware");
const userRouter = express.Router();

userRouter.post(
  "/register",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

module.exports = userRouter;
