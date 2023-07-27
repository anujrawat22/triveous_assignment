"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const productRouter = (0, express_1.Router)();
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
 */
productRouter.post("/create", productController_1.addProduct);
/**
 * @openapi
 * /api/product/update/:id:
 *    patch:
 *       summary : This is for the user to signup
 *       tags : [Product]
 */
productRouter.patch("/update/:id", productController_1.updateProduct);
/**
 * @openapi
 * /api/product/delete/:id:
 *    delete:
 *       summary : This is for the user to signup
 *       tags : [Product]
 */
productRouter.delete("/delete/:id", productController_1.deleteProduct);
exports.default = productRouter;
