"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const userModel_1 = require("../models/userModel");
const orderRouter = (0, express_1.Router)();
/**
 * @openapi
 * tags :
 *      name : Orders
 */
/**
 * @openapi
 * /api/order:
 *    post:
 *       summary : This is for the user to get all category data
 *       tags : [Orders]
 */
orderRouter.post("/", orderController_1.createOrder);
/**
 * @openapi
 * /api/order/userOrder/:id:
 *    get:
 *       summary : This is for the user to get all category data
 *       tags : [Orders]
 */
orderRouter.get("/userOrder/:id", (0, authorizationMiddleware_1.rbacMiddleware)([userModel_1.UserRole.ADMIN, userModel_1.UserRole.USER]), orderController_1.allOrdersofUser);
/**
 * @openapi
 * /api/order/:id:
 *    get:
 *       summary : This is for the user to get all category data
 *       tags : [Orders]
 */
orderRouter.get("/:id", orderController_1.getOrderbyId);
exports.default = orderRouter;