"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const userModel_1 = require("../models/userModel");
const productRouter = (0, express_1.Router)();
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
 *       summary : This is for the user to signup
 *       tags : [Product]
 *
 */
productRouter.get("/:id", productController_1.getProductbyCategory);
/**
 * @openapi
 * /api/product/getProduct/:id:
 *    get:
 *       summary : This is for the user to signup
 *       tags : [Product]
 */
productRouter.get("/getProduct/:id", productController_1.getProductById);
/**
 * @openapi
 * /api/product/create:
 *    post:
 *       summary : This is for the user to signup
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
productRouter.post("/create", (0, authorizationMiddleware_1.rbacMiddleware)([userModel_1.UserRole.ADMIN]), productController_1.addProduct);
/**
 * @openapi
 * /api/product/update/:id:
 *    patch:
 *       summary : This is for the user to signup
 *       tags : [Product]
 */
productRouter.patch("/update/:id", (0, authorizationMiddleware_1.rbacMiddleware)([userModel_1.UserRole.ADMIN]), productController_1.updateProduct);
/**
 * @openapi
 * /api/product/delete/:id:
 *    delete:
 *       summary : This is for the user to signup
 *       tags : [Product]
 */
productRouter.delete("/delete/:id", (0, authorizationMiddleware_1.rbacMiddleware)([userModel_1.UserRole.ADMIN]), productController_1.deleteProduct);
exports.default = productRouter;
