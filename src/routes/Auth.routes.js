import { Router } from "express";
import * as authController from "../controllers/Auth.controller";
import { verifySignUp } from "../middlewares"

const router = Router();

router.post("/signup", [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted], authController.signUp);
router.post("/signin", authController.signIn);

export default router;