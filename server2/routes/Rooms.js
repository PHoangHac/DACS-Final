import express from "express";
import {
  createRoom,
  UpdateRoom,
  DeleteRoom,
  GetOneRoom,
  GetAllRoom,
  createPostReview,
  PutLike,
  PutUnlike,
  PutVisitorPost,
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

// //likes
// router.put("/like", verifyToken, PutLike);

// //Unlike
// router.put("/Unlike", verifyToken, PutUnlike);

//Count visit post //Dua cai vao qua xam ???
router.put("/CountPostVisit/:id", verifyToken, PutVisitorPost);

export default router;
