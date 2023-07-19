import express from "express";
import { register, login, verifyToken, profile,  } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/verify", verifyToken);
router.get("/profile", profile);


export default router;
