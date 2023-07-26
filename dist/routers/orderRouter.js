"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const userModel_1 = require("../models/userModel");
const orderRouter = (0, express_1.Router)();
orderRouter.post("/", orderController_1.createOrder);
orderRouter.get("/userOrder/:id", (0, authorizationMiddleware_1.rbacMiddleware)([userModel_1.UserRole.ADMIN, userModel_1.UserRole.USER]), orderController_1.allOrdersofUser);
orderRouter.get("/orders/:id", orderController_1.getOrderbyId);
exports.default = orderRouter;
//# sourceMappingURL=orderRouter.js.map