import express from "express";
//import framework

//import modules
import {
  UpdateUser,
  DeleteUser,
  GetOneUser,
  getAllUser,
} from "../controllers/UserController.js";

import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

//create variable use Router in express framework
const router = express.Router();

//All methods

//update
router.put("/:id", verifyUser, UpdateUser);

//delete
router.delete("/:id", verifyUser, DeleteUser);

//get one
router.get("/:id", verifyUser, GetOneUser);

//get all
router.get("/", verifyAdmin, getAllUser);

export default router;
