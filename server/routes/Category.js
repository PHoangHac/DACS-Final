import express from "express";
import {
  createCategory,
  UpdateCategory,
  DeleteCategory,
  GetOneCategory,
  GetAllCategory,
} from "../controllers/CategoryController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//create variable use Router in express framework
const router = express.Router();

//All methods

//create
router.post("/", verifyAdmin, createCategory);

//update
router.put("/:id", verifyAdmin, UpdateCategory);

//delete
router.delete("/:id", verifyAdmin, DeleteCategory);

//get one
router.get("/:id", GetOneCategory);

//get all
router.get("/", GetAllCategory);

export default router;
