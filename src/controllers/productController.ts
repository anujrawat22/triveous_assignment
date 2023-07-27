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
    const {title ,price , description , specification , category_id , images , mainImage , brand , model , colours , warrantyPeriod} = req.body

    try {
        const findProduct = await Product.findOne({title, model , brand})
        if(findProduct){
            return res.status(400).json({error : "Product already exists , try updating the product"})
        }
       
        const product  = new Product({title,price,description, specification, category_id,images,mainImage,brand,model,colours,warrantyPeriod})
        await product.save()
        return res.status(201).send({msg : "Product created succesfully"})
    } catch (error) {
       console.log("Error creating the product", error);
       res.status(500).send({error : "Server error"})
    }
}


export const updateProduct =async (req:Request, res : Response) => {
    const {id} = req.params
    const {payload} = req.body
    try {
        const product = await Product.findById(id)
        if(!product){
            return res.status(404).send({error : "Product not found"})
        }

        await Product.findByIdAndUpdate(id,payload)
        return res.status(201).send({msg :`Product with id - ${id} updated`, data : product})
    } catch (error) {
        console.log("Error udating the product");
        res.status(500).send({error : "Server error"})
        
    }
}

export const deleteProduct =async (req:Request, res : Response) => {
    const {id} = req.params;
    try {
        const product = await Product.findById(id)
        if(!product){
            return res.status(404).json({error : "Product doesn't exists"})
        }

        await Product.findByIdAndDelete(id)
        return res.status(204).send({msg : `Product with id - ${id} deleted sucessfully`})
    } catch (error) {
        console.log("Error deleting the product");
        res.status(500).send({error: "Server error"})
        
    }
}