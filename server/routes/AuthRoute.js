import express from "express";
import {
  checkOtp,
  loginMember,
  loginUser,
  registerMember,
  registerUser,
} from "../controllers/AuthController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/checkOtp", checkOtp);
router.post("/registerMember", registerMember);
router.post("/loginMember", loginMember);
export default router;
