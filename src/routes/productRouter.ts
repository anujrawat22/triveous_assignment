import { Router } from "express";
import { addProduct, deleteProduct, getProductById, getProductbyCategory, updateProduct } from "../controllers/productController";
import { rbacMiddleware } from "../middlewares/authorizationMiddleware";
import { UserRole } from "../models/userModel";

const productRouter = Router()

/**
 * @openapi
 * components : 
 *      schemas : 
 *        Product : 
 *           type : object
 *           properties : 
 *              title : 
 *                 type : string
 *                 description : Product title
 *              price : 
 *                 type : number
 *                 description : product price
 *              description : 
 *                 type : string
 *                 description : product description
 *              specifiaction : 
 *                 type : string
 *                 description : product specs
 *              category_id : 
 *                 type : string
 *                 description : id of the parent category
 *              images : 
 *                 type : array
 *                 description : array of the product images
 *              mainImage : 
 *                 type : string
 *                 description : product main image
 *              brand : 
 *                 type : string
 *                 description : Brand name
 *              model : 
 *                 type : string
 *                 description : model name of the product
 *              colours : 
 *                 type : array
 *                 description : array of the colors name 
 *              warrantyPeriod : 
 *                 type : number
 *                 description : warrant period of the product
 */


/**
 * @openapi
 * tags : 
 *      name : Product     
 */

/**
 * @openapi
 * /api/product/:id:
 *    get: 
 *       summary : Api for user to get products by category id
 *       tags : [Product]
 *       responses : 
 *          201 : 
 *              description : All products data
 *              content : 
 *                 application/json : 
 *                    schema : 
 *                      type : object 
 *                      item : 
 *                         $ref  : "#/components/schemas/Product"
 *          500 : 
 *                description : server error message
 * 
 *       
 */

productRouter.get("/:id",getProductbyCategory)


/**
 * @openapi
 * /api/product/getProduct/:id:
 *    get: 
 *       summary : Api for user to get product details by id
 *       tags : [Product]
 */

productRouter.get("/getProduct/:id",getProductById)


/**
 * @openapi
 * /api/product/create:
 *    post: 
 *       summary : Api for admin to create product
 *       tags : [Product]
 *       requestBody : 
 *           required : true
 *           content : 
 *               application/json : 
 *                 schema : 
 *                    $ref : "#/components/schemas/Product"
 *       responses : 
 *          201 : 
 *             description : 
 */
productRouter.post("/create",rbacMiddleware([UserRole.ADMIN]),addProduct)


/**
 * @openapi
 * /api/product/update/:id:
 *    patch: 
 *       summary : Api for admin to update product by id
 *       tags : [Product]
 */
productRouter.patch("/update/:id",rbacMiddleware([UserRole.ADMIN]),updateProduct)


/**
 * @openapi
 * /api/product/delete/:id:
 *    delete: 
 *       summary : Api for admin to delete a product by id
 *       tags : [Product]
 */
productRouter.delete("/delete/:id",rbacMiddleware([UserRole.ADMIN]),deleteProduct)

export default productRouter