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
  const {
    name , description , parentCategory , subCategories } = req.body
  
    try {
        const category = new Category({name,description,parentCategory,})
        await category.save()
        res.status(201).json({msg : "Category created" , data : category })
    } catch (error) {
        console.log('Error in creating category' , error);
        res.status(500).send({error : 'Server error'})
    }
}

