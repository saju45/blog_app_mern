import express from "express";
import {
  addCategory,
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

router.get(
  "/getCategories",
  authMiddleware.authVerify,
  authMiddleware.authorizeRole("admin"),
  getCategories
);

export default router;
