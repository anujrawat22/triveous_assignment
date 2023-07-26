import { Request, Response } from "express";
import { IProduct, Product } from "../models/productModel";

export const getProductbyCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const products: IProduct[] = await Product.find({ category_id: id });

    res
      .status(201)
      .json({ msg: `Product data fro category id - ${id}`, data: products });
  } catch (error) {
    console.log("Error in getting product data", error);
    res.status(500).json({ Error: "Server error" });
  }
};

export const getProductById =async (req : Request, res : Response) => {
    try {
        const {id} = req.params;
        const product : IProduct = await Product.findById(id)
        if(!product){
            res.status(404).json({msg : `Product data for product id - ${id} not found` })
        }else{
            res.status(201).send({msg : `Product data for id - ${id}`,data : product})
        }
    } catch (error) {
        console.log('Error in getting product data by id' ,error);
        res.status(500).send({ Error : "Server Error"})
    }
}


export const addProduct =async (req:Request, res : Response) => {
    try {
        
    } catch (error) {
        
    }
}


export const updateProduct =async (req:Request, res : Response) => {
    try {
        
    } catch (error) {
        
    }
}

export const deleteProduct =async (req:Request, res : Response) => {
    try {
        
    } catch (error) {
        
    }
}