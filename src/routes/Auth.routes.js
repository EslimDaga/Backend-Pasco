import { Router } from "express";
import * as authController from "../controllers/Auth.controller";
const router = Router();

router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);

export default router;