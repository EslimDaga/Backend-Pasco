import { Router } from "express";
import * as UserController from "../controllers/User.constrolles";
import { authJwt, verifySignUp } from "../middlewares"

const router = Router();

router.post("/", [
  authJwt.verifyToken,
  authJwt.isAdmin,
  verifySignUp.checkRolesExisted
], UserController.createUser);

export default router;