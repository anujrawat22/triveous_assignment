import { Router } from "express";
import { addProduct, deleteProduct, getProductById, getProductbyCategory, updateProduct } from "../controllers/productController";

const productRouter = Router()

productRouter.get("/:id",getProductbyCategory)

productRouter.get("/getProduct/:id",getProductById)

productRouter.post("/create",addProduct)

productRouter.patch("/update/:id",updateProduct)

productRouter.delete("/delete/:id",deleteProduct)

export default productRouter