import { Router } from "express";
import * as districtController from "../controllers/district.controller";

const router = Router();

router.get("/all", districtController.getDistrict);

router.post("/", districtController.createDistrict);

router.get("/:districtId", districtController.getDistrictById);

router.put("/:districtId", districtController.updateDistrict);

router.delete("/:districtId", districtController.deleteDistrict);


export default router;