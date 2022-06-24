//import framework, modules
import express from "express";
import {
  CreateUser,
  loginUser,
  forgotPassword,
  resestPassword,
  logout,
} from "../controllers/AuthController.js";

import { checkAuthSignUp } from "../utils/error.js";
import { authCheckToken } from "../middlewares/AuthForgotPass.js";

//create variable use Router in express framework
const router = express.Router();

//All methods

//PostRegister
router.post("/register", checkAuthSignUp, CreateUser);

//Postlogin
router.post("/login", loginUser);

//SendEmailReset
router.post("/forgot_pass", forgotPassword);

//SendEmailReset
router.post("/reset_pass", authCheckToken, resestPassword);

// Logout with clear cookie
router.get("/", logout);

export default router;
