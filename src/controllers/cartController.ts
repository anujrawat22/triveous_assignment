
 import e, { Request , Response } from "express";
import { Cart } from "../models/cartModel";

 export const getCart = async(req : Request , res : Response)=>{
    try {
        
    } catch (error) {
        
    }
 }


 export const getCartbyId = async(req : Request,res  : Response)=>{
    try {
        
    } catch (error) {
        
    }
 }


 export const addtoCart = async(req : Request, res : Response)=>{
    const { userId , productId , quantity } = req.body;
    try {
        let cart = await Cart.findOne({userId})

        if(!cart){
             cart = new Cart({userId , products : []})
        }

        const existingProductIndex = cart.products.findIndex(
            (item) => item.productId === productId
        )

       if(existingProductIndex !== -1){
        cart.products[existingProductIndex].quantity += quantity;
       }else{
        cart.products.push({productId ,quantity})
       }

       await cart.save()

       res.status(201).json({msg : "Product added to cart", data : cart})
    } catch (error) {
        console.log('Error adding item to cart',error);
        res.status(500).json({Error : "Server error"})
    }
 }

 