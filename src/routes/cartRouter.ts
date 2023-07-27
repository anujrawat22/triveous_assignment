import { Router } from "express";
import { addtoCart, deleteCartItem, getCart, getCartbyId, updateCart } from "../controllers/cartController";
import { rbacMiddleware } from "../middlewares/authorizationMiddleware";
import { UserRole } from "../models/userModel";

const cartRouter = Router()

/**
 * @openapi
 * tags : 
 *      name : Cart     
 */

/**
 * @openapi
 * /api/cart/:
 *    get: 
 *       summary : This is for the user to signup
 *       tags : [Cart]
 */

cartRouter.get("/",getCart)


/**
 * @openapi
 * /api/cart/usercart/:id:
 *    get: 
 *       summary : This is for the user to signup
 *       tags : [Cart]
 */
cartRouter.get("/usercart/:id",rbacMiddleware([UserRole.ADMIN]),getCartbyId)


/**
 * @openapi
 * /api/cart/create:
 *    get: 
 *       summary : This is for the user to signup
 *       tags : [Cart]
 */
cartRouter.post("/create",addtoCart)


/**
 * @openapi
 * /api/cart/update/:productId:
 *    patch: 
 *       summary : This is for the user to signup
 *       tags : [Cart]
 */
cartRouter.patch("/update/:productId",updateCart)


/**
 * @openapi
 * /api/cart/:productId:
 *    delete: 
 *       summary : This is for the user to signup
 *       tags : [Cart]
 */
cartRouter.delete("/:productId",deleteCartItem)



export default cartRouter;