import express from "express";
//import framework

//import modules
import {
  UpdateUser,
  DeleteUser,
  GetOneUser,
  getAllUser,
  GetRoomsUser,
} from "../controllers/UserController.js";

import { verifyUser } from "../utils/verifyToken.js";

//create variable use Router in express framework
const router = express.Router();

//All methods

//update
router.put("/:id", verifyUser, UpdateUser);

//delete
router.delete("/:id", verifyUser, DeleteUser);

//get one
router.get("/:id", GetOneUser);

//get all
router.get("/", getAllUser);

//get all room with user have
router.get("/UserRooms/:id", GetRoomsUser);

export default router;
