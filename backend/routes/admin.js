import express from "express";
import { addBlog, adminLogin } from "../controller/adminController.js";
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

export default router;
