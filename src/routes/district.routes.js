import { Router } from "express";
import * as districtController from "../controllers/district.controller";
import { authJwt } from "../middlewares/";

const router = Router();

router.get("/all", [authJwt.verifyToken, authJwt.isModerator] , districtController.getDistrict);

router.post("/", districtController.createDistrict);

router.get("/:districtId", districtController.getDistrictById);

router.put("/:districtId", authJwt.verifyToken, districtController.updateDistrict);

router.delete("/:districtId", [authJwt.verifyToken, authJwt.isModerator] , districtController.deleteDistrict);


export default router;