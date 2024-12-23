import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "Email already exists" });
    }

    const newUser = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    const registeredUser = await newUser.save();

    const token = jwt.sign(
      { _id: registeredUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "10d",
      }
    );
    res.status(201).json({
      success: true,
      message: "Account created",
      user: registeredUser,
      token,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ messaeg: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    res.cookie("blogApp", token, {
      http: true,
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    });
    // update user token
    user.token = token;
    await user.save();

    res.json({ message: "User logged in successfully", user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const checkCookie = async (req, res) => {
  try {
    const token = req.cookies.blogApp;

    if (token) {
      return res.status(200).json({ message: true });
    }

    if (!token) {
      return res.status(200).json({ message: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("blogApp", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      path: "/",
    });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
