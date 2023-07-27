
 import e, { Request , Response } from "express";
import { Cart, ICart } from "../models/cartModel";


 export const getCart = async(req : Request , res : Response)=>{
    const {userId} = req.body;
    try {
        const cart : ICart = await Cart.findOne({userId})

        if(!cart){
            return res.status(404).json({ error : 'Cart not found'})
        }
        res.status(201).json({msg : 'Cart data',data  : cart})
    } catch (error) {
        console.log('Error getting item from cart',error);
        res.status(500).json({error : "Server error"})
    }
 }


 export const getCartbyId = async(req : Request,res  : Response)=>{
    const { id } = req.params;
    try {
      const cart : ICart = await Cart.findOne({userId : id})
      if(!cart){
        return res.status(404).json({ error : 'Cart not found'})
      }

      res.status(201).json({msg : `Cart of userId ${id}`,data  : cart})
        
    } catch (error) {
        console.log('Error getting item from cart',error);
        res.status(500).json({error : "Server error"})
    }
 }


 export const addtoCart = async(req : Request, res : Response)=>{
    const { userId , productId ,price, quantity } = req.body;
    try {
        let cart : ICart = await Cart.findOne({userId})

        if(!cart){
             cart = new Cart({userId , products : []})
        }

        const existingProductIndex = cart.products.findIndex(
            (item) => item.productId === productId
        )

       if(existingProductIndex !== -1){
        cart.products[existingProductIndex].quantity += quantity;
       }else{
        cart.products.push({productId ,price,quantity})
       }

       await cart.save()

       res.status(201).json({msg : "Product added to cart", data : cart})
    } catch (error) {
        console.log('Error adding item to cart',error);
        res.status(500).json({error : "Server error"})
    }
 }

 export const deleteCartItem = async(req : Request , res : Response)=>{
    const { userId  } = req.body;
    const { productId } = req.params;
    try {
        const cart : ICart= await Cart.findOne({userId})

        if(!cart){
            return res.status(404).json({error : "Cart not found."})
        }

        const existingProductIndex = cart.products.findIndex((item) => item.productId.toString() === productId)

        if(existingProductIndex !== -1){
            cart.products.splice(existingProductIndex, 1)

            await cart.save()
            res.status(201).json({msg : 'Item deleted from cart',data : cart})
        }else{
            res.status(404).json({error : "No product found in cart   "})
        }
    } catch (error) {
        console.log('Error deleting item from cart',error);
        res.status(500).json({error : "Server error"})
    }
 }

 export const updateCart =async (req : Request, res:Response) => {
    const {userId , quantity} = req.body;
    const { productId} = req.params
    try { 
        const cart : ICart = await Cart.findOne({userId})

        if(!cart){
            return res.status(404).json({error : "Cart not found"})
        }

        const existingProductIndex = cart.products.findIndex((item)=> item.productId.toString() === productId)

        if(existingProductIndex !== -1){
            cart.products[existingProductIndex].quantity = quantity;
            await cart.save()
            res.status(201).json({msg : "Cart updated" , data : cart})
        }else{
            res.status(404).json({error : "Item in cart not found"})
        }
    } catch (error) {
        
    }
 }
