"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cartController_1 = require("../controllers/cartController");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const userModel_1 = require("../models/userModel");
const cartRouter = (0, express_1.Router)();
/**
 * @openapi
 * tags :
 *      name : Cart
 */
/**
 * @openapi
 * /api/cart:
 *    get:
 *       summary : Api for the user to get his cart data
 *       tags : [Cart]
 */
cartRouter.get("/", cartController_1.getCart);
/**
 * @openapi
 * /api/cart/usercart/:id:
 *    get:
 *       summary : Api for the admin to get the cart data of user by it's id
 *       tags : [Cart]
 */
cartRouter.get("/usercart/:id", (0, authorizationMiddleware_1.rbacMiddleware)([userModel_1.UserRole.ADMIN]), cartController_1.getCartbyId);
/**
 * @openapi
 * /api/cart/create:
 *    get:
 *       summary : Api for adding items to cart
 *       tags : [Cart]
 */
cartRouter.post("/create", cartController_1.addtoCart);
/**
 * @openapi
 * /api/cart/update/:productId:
 *    patch:
 *       summary : Api for the user to update to items in his cart
 *       tags : [Cart]
 */
cartRouter.patch("/update/:productId", cartController_1.updateCart);
/**
 * @openapi
 * /api/cart/:productId:
 *    delete:
 *       summary : Api for user to delete items in his cart
 *       tags : [Cart]
 */
cartRouter.delete("/:productId", cartController_1.deleteCartItem);
exports.default = cartRouter;
