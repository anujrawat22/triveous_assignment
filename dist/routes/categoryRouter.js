"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = require("../controllers/categoryController");
const categoryRouter = (0, express_1.Router)();
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
categoryRouter.get("/", categoryController_1.getAllCategory);
/**
 * @openapi
 * /api/category:
 *    post:
 *       summary : This is for the admin to create category
 *       tags : [Category]
 */
categoryRouter.post("/", categoryController_1.createCategory);
exports.default = categoryRouter;
