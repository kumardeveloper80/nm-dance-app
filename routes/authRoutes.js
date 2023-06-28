import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

router.post("/registration", register);
router.get("/login", login);


export default router;
