import { Request, Response } from "express";
import { Category, ICategory } from "../models/categoryModel";

export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const categoryData: ICategory[] = await Category.find()
      .populate("parentCategory", "name")
      .populate("subCategories", "name");
    if (categoryData.length == 0) {
      res
        .status(404)
        .json({ msg: "No category data found", data: categoryData });
    } else {
      res.status(201).json({ msg: "All categories Data", data: categoryData });
    }
  } catch (error) {
    console.log("Error in getting All categories data", error);
    res.status(500).json({ Error: "Server error" });
  }
};


export const createCategory = async(req : Request , res : Response)=>{
    try {
        
    } catch (error) {
        
    }
}

