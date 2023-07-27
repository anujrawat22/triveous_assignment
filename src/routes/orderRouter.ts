import { Router } from "express";
import { allOrdersofUser, createOrder, getOrderbyId } from "../controllers/orderController";
import { rbacMiddleware } from "../middlewares/authorizationMiddleware";
import { UserRole } from "../models/userModel";

const orderRouter = Router()

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

orderRouter.post("/",createOrder)


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
orderRouter.get("/userOrder/:id",rbacMiddleware([UserRole.ADMIN,UserRole.USER]),allOrdersofUser)


/**
 * @openapi
 * /api/order/:id:
 *    get: 
 *       summary : This is for the admin to get order details and user to get his order details 
 *       tags : [Orders]
 *       responses : 
 *          
 */
orderRouter.get("/:id",getOrderbyId)



export default orderRouter;