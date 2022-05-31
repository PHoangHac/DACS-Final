import express from "express";
import {
  createRoom,
  UpdateRoom,
  DeleteRoom,
  GetOneRoom,
  GetAllRoom,
} from "../controllers/RoomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//create variable use Router in express framework
const router = express.Router();

//All methods

//create
router.post("/:categoryid", verifyAdmin, createRoom);

//update
router.put("/:id", verifyAdmin, UpdateRoom);

//delete
router.delete("/:id/:categoryid", verifyAdmin, DeleteRoom);

//get one
router.get("/:id", GetOneRoom);

//get all
router.get("/", GetAllRoom);

export default router;
