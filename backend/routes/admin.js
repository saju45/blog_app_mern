import express from "express";
import {
  addBlog,
  adminLogin,
  deleteBlog,
  updateBlog,
} from "../controller/adminController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/imageUpload.js";
const router = express.Router();

router.post("/adminLogin", adminLogin);
router.post(
  "/addBlog",
  authMiddleware.authVerify,
  authMiddleware.authorizeRole("admin"),
  upload.single("image"),
  addBlog
);

router.put(
  "/updateBlog/:id",
  authMiddleware.authVerify,
  authMiddleware.authorizeRole("admin"),
  upload.single("image"),
  updateBlog
);

router.delete(
  "/deleteBlog/:id",
  authMiddleware.authVerify,
  authMiddleware.authorizeRole("admin"),
  deleteBlog
);

export default router;
