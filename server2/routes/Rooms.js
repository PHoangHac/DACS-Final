import express from "express";
import {
  createRoom,
  UpdateRoom,
  DeleteRoom,
  GetOneRoom,
  GetAllRoom,
  createPostReview,
} from "../controllers/RoomController.js";
import { verifyToken } from "../utils/verifyToken.js";

//create variable use Router in express framework
const router = express.Router();

//All methods

//create
router.post("/:categoryid/:userid", verifyToken, createRoom);

//update
router.put("/:id", verifyToken, UpdateRoom);

//delete
router.delete("/delete/:id", verifyToken, DeleteRoom);

//reviews
router.put("/reviews/:id", verifyToken, createPostReview);

//get one
router.get("/:id", GetOneRoom);

//get all
router.get("/", GetAllRoom);

export default router;
