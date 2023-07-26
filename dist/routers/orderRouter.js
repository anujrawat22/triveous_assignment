import { Router } from "express";
import { allOrdersofUser, createOrder, getOrderbyId } from "../controllers/orderController";
import { rbacMiddleware } from "../middlewares/authorizationMiddleware";
import { UserRole } from "../models/userModel";
const orderRouter = Router();
orderRouter.post("/", createOrder);
orderRouter.get("/userOrder/:id", rbacMiddleware([UserRole.ADMIN, UserRole.USER]), allOrdersofUser);
orderRouter.get("/orders/:id", getOrderbyId);
export default orderRouter;
