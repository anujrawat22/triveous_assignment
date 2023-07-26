import { Router } from "express";
import { createCategory, getAllCategory } from "../controllers/categoryController";
const categoryRouter = Router();
categoryRouter.get("/", getAllCategory);
categoryRouter.post("/", createCategory);
export default categoryRouter;
