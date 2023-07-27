import { Router } from "express";
import { createCategory, getAllCategory } from "../controllers/categoryController";
import { rbacMiddleware } from "../middlewares/authorizationMiddleware";
import { UserRole } from "../models/userModel";

const categoryRouter = Router()

/**
 * @openapi
 * tags : 
 *      name : Category     
 */


/**
 * @openapi
 * /api/category:
 *    get: 
 *       summary : This is for the user to get all category data
 *       tags : [Category]
 */

categoryRouter.get("/",getAllCategory)



/**
 * @openapi
 * /api/category:
 *    post: 
 *       summary : This is for the admin to create category
 *       tags : [Category]
 */
categoryRouter.post("/",rbacMiddleware([UserRole.ADMIN]),createCategory)


export default categoryRouter;