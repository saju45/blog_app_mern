import express from "express";
import {
  checkCookie,
  login,
  logout,
  register,
} from "../controller/userController.js";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logout);

//check cookie
router.get("/checkCookie", checkCookie);

export default router;
