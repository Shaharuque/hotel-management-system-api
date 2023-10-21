import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

//Routing refers to how an application’s endpoints (URIs) respond to client requests. 
router.post("/register", register)
router.post("/login", login)

export default router