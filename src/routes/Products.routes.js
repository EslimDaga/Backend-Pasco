import { Router } from "express";
import * as ProductController from "./../controllers/Product.controller";
import { authJwt, } from "../middlewares/"
const router = Router();

// Obtein Products
router.get("/", [ authJwt.verifyToken, authJwt.isModerator ] , ProductController.getProducts);

//Create Product
router.post("/", ProductController.createProduct);

//Obtain Product by id
router.get("/:productId", ProductController.getProductById);

//Update Product by id
router.put("/:productId", [ authJwt.verifyToken, authJwt.isAdmin ] , ProductController.updateProductById);

//Delete Product by id
router.delete("/:productId", [ authJwt.verifyToken, authJwt.isAdmin ], ProductController.deleteProductById);
export default router;