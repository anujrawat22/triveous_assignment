"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const userModel_1 = require("../models/userModel");
const orderRouter = (0, express_1.Router)();
/**
 * @openapi
*  components :
 *   schemas :
 *      Orderreq :
 *         type : object
 *         properties :
 *              userId :
 *                    type : string
 *                    description : id of the user
 *              shippingAddress :
 *                    type : string
 *                    description : Shipping
 *              paymentMethod :
 *                    type : string
 *                    description : method of payment
 *
 */
/**
 * @openapi
 * tags :
 *      name : Orders
 *      description : Apis related to creating , getting and deleting of the user
 */
/**
 * @openapi
 * /api/order:
 *    post:
 *       summary : This is for the user to create an order
 *       tags : [Orders]
 *       requestBody :
 *           required : true
 *           content :
 *               application/json :
 *                  schema :
 *                     $ref : '#/components/schemas/Orderreq'
 *       responses :
 *          201 :
 *              description : Order placed successful msg
 *          404 :
 *              description : cart not found message
 *          500 :
 *              description : server error response
 */
orderRouter.post("/", orderController_1.createOrder);
/**
 * @openapi
 * /api/order/userOrder/:id:
 *    get:
 *       summary : This is for the user and admin to get userorder details by id and user to get his all order history
 *       tags : [Orders]
 *       responses :
 *           '201' :
 *              description : All orders
 *              content :
 *                 application/json :
 *                    schema :
 *                       type : array
 *                       items :
 *                         $ref : '#/components/schemas/OrderRes'
 *           404 :
 *               description : Cart not found
 *           500 :
 *               description : Server error message
 *
 */
orderRouter.get("/userOrder/:id", (0, authorizationMiddleware_1.rbacMiddleware)([userModel_1.UserRole.ADMIN, userModel_1.UserRole.USER]), orderController_1.allOrdersofUser);
/**
 * @openapi
 * /api/order/:id:
 *    get:
 *       summary : This is for the admin to get order details and user to get his order details
 *       tags : [Orders]
 *       responses :
 *
 */
orderRouter.get("/:id", orderController_1.getOrderbyId);
exports.default = orderRouter;
