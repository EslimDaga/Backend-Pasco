import { Router } from "express";
import * as ProductController from "./../controllers/Product.controller";
const router = Router();

// Obtein Products
router.get("/", ProductController.getProducts);

//Create Product
router.post("/", ProductController.createProduct);

//Obtain Product by id
router.get("/:productId", ProductController.getProductById);

//Update Product by id
router.put("/:productId", ProductController.updateProductById);

//Delete Product by id
router.delete("/:productId", ProductController.deleteProductById);
export default router;