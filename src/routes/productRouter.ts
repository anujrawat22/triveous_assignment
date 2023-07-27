import { Router } from "express";
import { addProduct, deleteProduct, getProductById, getProductbyCategory, updateProduct } from "../controllers/productController";

const productRouter = Router()

/**
 * @openapi
 * tags : 
 *      name : Product     
 */

/**
 * @openapi
 * /api/product/:id:
 *    get: 
 *       summary : This is for the user to signup
 *       tags : [Product]
 */

productRouter.get("/:id",getProductbyCategory)


/**
 * @openapi
 * /api/product/getProduct/:id:
 *    get: 
 *       summary : This is for the user to signup
 *       tags : [Product]
 */

productRouter.get("/getProduct/:id",getProductById)


/**
 * @openapi
 * /api/product/create:
 *    post: 
 *       summary : This is for the user to signup
 *       tags : [Product]
 */
productRouter.post("/create",addProduct)


/**
 * @openapi
 * /api/product/update/:id:
 *    patch: 
 *       summary : This is for the user to signup
 *       tags : [Product]
 */
productRouter.patch("/update/:id",updateProduct)


/**
 * @openapi
 * /api/product/delete/:id:
 *    delete: 
 *       summary : This is for the user to signup
 *       tags : [Product]
 */
productRouter.delete("/delete/:id",deleteProduct)

export default productRouter