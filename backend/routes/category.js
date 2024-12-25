import express from "express";
import {
  addCategory,
  getBlogByCategory,
  getCategories,
} from "../controller/categoryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post(
  "/addCategory",
  authMiddleware.authVerify,
  authMiddleware.authorizeRole("admin"),
  addCategory
);

router.get("/getCategories", authMiddleware.authVerify, getCategories);
router.get("/getBlogByCategory/:id", getBlogByCategory);

export default router;
