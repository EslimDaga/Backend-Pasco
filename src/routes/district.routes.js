import { Router } from "express";
const router = Router();

router.get("/disctrict", (req,res) => {
  res.json("Get disctricts");
});

export default router;