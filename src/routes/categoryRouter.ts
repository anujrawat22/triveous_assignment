import { Router } from "express";
import { createCategory, getAllCategory } from "../controllers/categoryController";
import { rbacMiddleware } from "../middlewares/authorizationMiddleware";
import { UserRole } from "../models/userModel";
import { authMiddlware } from "../middlewares/authenticationMiddleware";

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
categoryRouter.post("/",createCategory)


export default categoryRouter;