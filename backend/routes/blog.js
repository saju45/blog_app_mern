import express from "express";
import {
  addBlogToFavourite,
  getAllBlogs,
  getAllFavouritesBlog,
  getRecentBlog,
  getSingleBlog,
  removeBlogFromFavourite,
} from "../controller/blogController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express();

// route to get all blogs

router.get("/getAllBlogs", getAllBlogs);
router.get("/getRecentBlog", getRecentBlog);
router.get("/getBlog/:id", authMiddleware.authVerify, getSingleBlog);
router.put(
  "/addToFavourite/:id",
  authMiddleware.authVerify,
  authMiddleware.authorizeRole("user"),
  addBlogToFavourite
);

router.put(
  "/removeBlogFromFavourite/:id",
  authMiddleware.authVerify,
  authMiddleware.authorizeRole("user"),
  removeBlogFromFavourite
);

router.get(
  "/getFavouriteBlogs",
  authMiddleware.authVerify,
  getAllFavouritesBlog
);

export default router;
