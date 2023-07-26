import { Router } from "express";
import { addtoCart, deleteCartItem, getCart, getCartbyId, updateCart } from "../controllers/cartController";
import { rbacMiddleware } from "../middlewares/authorizationMiddleware";
import { UserRole } from "../models/userModel";

const cartRouter = Router()

cartRouter.get("/",getCart)

cartRouter.get("/usercart/:id",rbacMiddleware([UserRole.ADMIN]),getCartbyId)

cartRouter.post("/create",addtoCart)

cartRouter.patch("/update",updateCart)

cartRouter.delete("/",deleteCartItem)



export default cartRouter;