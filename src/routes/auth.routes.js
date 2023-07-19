import express from "express";
import { register, login, verifyToken, profile, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/verify", verifyToken);
router.get("/profile", profile);
router.post("/logout", logout);

export default router;
