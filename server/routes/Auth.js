//import framework, modules
import express from "express";
import {
  CreateUser,
  loginUser,
  // logout,
} from "../controllers/AuthController.js";

import { checkAuthSignUp } from "../utils/error.js";

//create variable use Router in express framework
const router = express.Router();

//All methods

//PostRegister
router.post("/register", checkAuthSignUp, CreateUser);

//Postlogin
router.post("/login", loginUser);

//Logout with clear cookie
// router.get("/logout", logout);

export default router;
