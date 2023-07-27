import { Router } from "express";
import { login, signup } from "../controllers/userController";

const userRouter = Router();

/**
 * @openapi
 * components : 
 *   schemas :
 *      UserSignUp : 
 *         type : object
 *         properties : 
 *              username : 
 *                    type : string
 *                    description : Name of the user
 *              email :
 *                    type : string
 *                    description : User email
 *              password :
 *                    type : string
 *                    description : User password
 *              contact : 
 *                    type : number
 *                    description : Contact number of the user
 *      UserLogin : 
 *          type : object
 *          properties :
 *              email : 
 *                  type : string
 *                  description : User email
 *              password : 
 *                  type : string
 *                  description : User password
 *      LoginResponse : 
 *           type : object
 *           properties : 
 *               msg : 
 *                   type : string
 *                   description : Login successful response
 *               token : 
 *                   type : string
 *                   description : token for the user
 */

/**
 * @openapi
 * tags :
 *      name : Users
 *      description : Apis related to User Login and signup
 */

/**
 * @openapi
 * /api/user/signup:
 *    post:
 *       summary : This is for the user to signup
 *       tags : [Users]
 *       requestBody : 
 *          required : true
 *          content : 
 *              application/json:
 *                 schema : 
 *                    $ref : '#/components/schemas/UserSignUp'
 *       responses :
 *         201 :
 *            description : Registration successful message   
 *         400 :
 *            description : User already exists
 *         500 : 
 *           description : Some server error
 *         
 *
 *
 */

userRouter.post("/signup", signup);

/**
 * @openapi
 * /api/user/login:
 *    post:
 *       summary : This is for the user to login
 *       tags : [Users]
 *       requestBody : 
 *          required : true
 *          content : 
 *              application/json:
 *                 schema : 
 *                    $ref : '#/components/schemas/UserLogin'
 *       responses :
 *         201 :
 *            description : Login successful message ;
 *            content : 
 *                 application/json : 
 *                    schema : 
 *                      type : object 
 *                      item : 
 *                         $ref  : "#/components/schemas/LoginResponse"  
 *         401 :
 *            description : Invalid credentials , When the password is wrong
 *         404 : 
 *            description : User doesn't exist, Please login
 *         500 : 
 *           description : Some server error
 *         
 *
 *
 */

userRouter.post("/login", login);

export default userRouter;
