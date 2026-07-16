import express from "express";

import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  changePassword,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

// Get Logged In User Profile
router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

export default router;