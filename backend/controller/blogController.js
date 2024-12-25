import Blog from "../model/blogModel.js";
import User from "../model/userModel.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "successfully fetch all blogs",
      blogs: blogs,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    let favourite = false;

    if (user.favouriteBlogs.includes(req.params.id)) {
      favourite = true;
    }
    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    res.status(200).json({
      success: true,
      message: "Fetch single blog",
      blog: blog,
      favourite,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

export const getRecentBlog = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).limit(4);
    res.status(200).json({
      success: true,
      message: "Successfully fetch recent blog",
      blogs: blogs,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

export const addBlogToFavourite = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const blog = await Blog.findById(req.params.id);

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    if (
      user.favouriteBlogs.includes(req.params.id) ||
      blog.favouriteBlogByUser.includes(user._id)
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Blog already added to favourite" });
    }

    user.favouriteBlogs.push(req.params.id);
    blog.likes = blog.likes + 1;
    blog.favouriteBlogByUser.push(user._id);
    await user.save();
    await blog.save();
    res.status(200).json({
      success: true,
      message: "Blog added to favourite successfully",
      blog: blog,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

export const removeBlogFromFavourite = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const blog = await Blog.findById(req.params.id);

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    if (
      !user.favouriteBlogs.includes(req.params.id) ||
      !blog.favouriteBlogByUser.includes(user._id)
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Blog not found in favourite" });
    }

    user.favouriteBlogs = user.favouriteBlogs.filter(
      (id) => id.toString() !== req.params.id
    );
    blog.likes = blog.likes - 1;

    blog.favouriteBlogByUser = blog.favouriteBlogByUser.filter(
      (id) => id.toString() !== user._id.toString()
    );

    await user.save();
    await blog.save();
    res.status(200).json({
      success: true,
      message: "Blog removed from favourite successfully",
      blog: blog,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

export const getAllFavouritesBlog = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const blogs = await Blog.find({ _id: { $in: user.favouriteBlogs } });
    res.status(200).json({
      success: true,
      message: "Successfully fetch all favourite blogs",
      blogs: blogs,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
