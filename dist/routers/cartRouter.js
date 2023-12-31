"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cartController_1 = require("../controllers/cartController");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const userModel_1 = require("../models/userModel");
const cartRouter = (0, express_1.Router)();
cartRouter.get("/", cartController_1.getCart);
cartRouter.get("/usercart/:id", (0, authorizationMiddleware_1.rbacMiddleware)([userModel_1.UserRole.ADMIN]), cartController_1.getCartbyId);
cartRouter.post("/create", cartController_1.addtoCart);
cartRouter.patch("/update", cartController_1.updateCart);
cartRouter.delete("/", cartController_1.deleteCartItem);
exports.default = cartRouter;
