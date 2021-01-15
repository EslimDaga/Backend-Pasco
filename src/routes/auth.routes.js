import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { verifySignup } from "../middlewares/index";

const router = Router();

router.post("/signup", [verifySignup.checkRolesExisted, verifySignup.checkDuplicateUsernameOrEmail] , authController.signUp);

router.post("/signin", authController.signIn);

export default router;