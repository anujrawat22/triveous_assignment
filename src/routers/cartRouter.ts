import { Router } from "express";
import { addtoCart, getCart, getCartbyId } from "../controllers/cartController";
import { rbacMiddleware } from "../middlewares/authorizationMiddleware";
import { UserRole } from "../models/userModel";

const cartRouter = Router()

cartRouter.get("/",getCart)

cartRouter.get("/usercart/:id",rbacMiddleware([UserRole.ADMIN]),getCartbyId)

cartRouter.post("/create",addtoCart)

cartRouter.delete(":/id",)



export default cartRouter;