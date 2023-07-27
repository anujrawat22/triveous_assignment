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
 *       summary :Api  for the user to get his cart data
 *       tags : [Cart]
 */

cartRouter.get("/",getCart)


/**
 * @openapi
 * /api/cart/usercart/:id:
 *    get: 
 *       summary : Api for the admin to get the cart data of user by it's id
 *       tags : [Cart]
 */
cartRouter.get("/usercart/:id",rbacMiddleware([UserRole.ADMIN]),getCartbyId)


/**
 * @openapi
 * /api/cart/create:
 *    get: 
 *       summary : Api for adding items to cart
 *       tags : [Cart]
 */
cartRouter.post("/create",addtoCart)


/**
 * @openapi
 * /api/cart/update/:productId:
 *    patch: 
 *       summary : Api for the user to update to items in his cart
 *       tags : [Cart]
 */
cartRouter.patch("/update/:productId",updateCart)


/**
 * @openapi
 * /api/cart/:productId:
 *    delete: 
 *       summary : Api for user to delete items in his cart
 *       tags : [Cart]
 */
cartRouter.delete("/:productId",deleteCartItem)



export default cartRouter;