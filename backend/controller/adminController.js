import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Blog from "../model/blogModel.js";
import Category from "../model/categoryModel.js";
import User from "../model/userModel.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.role === "user") {
      return res.status(403).json({ error: "only andin can login this side" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    console.log(token);

    res.cookie("blogApp", token, {
      http: true,
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    });
    // update user token
    user.token = token;
    await user.save();
    res.status(200).json({ message: "Admin login success", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const addBlog = async (req, res) => {
  try {
    const { title, description, categoryId } = req.body;

    if (!title || !description || !categoryId) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }
    const blog = new Blog({
      title,
      description,
      image: req.file.path,
    });
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    await blog.save();
    category.blogs.push(blog._id);
    await category.save();

    res
      .status(201)
      .json({ success: true, message: "Blog added successfully", blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};
