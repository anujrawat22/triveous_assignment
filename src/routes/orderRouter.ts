import { Router } from "express";
import { allOrdersofUser, createOrder, getOrderbyId } from "../controllers/orderController";
import { rbacMiddleware } from "../middlewares/authorizationMiddleware";
import { UserRole } from "../models/userModel";

const orderRouter = Router()

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

orderRouter.post("/",createOrder)


/**
 * @openapi
 * /api/order/userOrder/:id:
 *    get: 
 *       summary : This is for the user to get all category data
 *       tags : [Orders]
 */
orderRouter.get("/userOrder/:id",rbacMiddleware([UserRole.ADMIN,UserRole.USER]),allOrdersofUser)


/**
 * @openapi
 * /api/order/:id:
 *    get: 
 *       summary : This is for the user to get all category data
 *       tags : [Orders]
 */
orderRouter.get("/:id",getOrderbyId)



export default orderRouter;