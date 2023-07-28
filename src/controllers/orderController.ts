import { Request, Response } from "express";
import { Cart } from "../models/cartModel";
import { IOrder, Order } from "../models/orderModel";
import { UserRole } from "../models/userModel";
// for creating order
export const createOrder = async (req: Request, res: Response) => {
  const { userId, shippingAddress, paymentMethod } = req.body;
  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const newOrder = new Order({
      userId,
      products: cart.products,
      total: cart.products.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      shippingAddress,
      paymentMethod,
    });
    await newOrder.save();
    cart.products = [];
    await cart.save();
    res.status(201).json({ msg: "Order placed successfully" });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Server error." });
  }
};


//  for order history of user
export const allOrdersofUser = async(req: Request ,res : Response)=>{
    let {id} =req.params;
    const {userId,role} = req.body
    let {p,l} = req.query

    let  page : number;
  let limit : number;

  p ? page = +p : page = 1
  l ? limit = +l : limit = 10
    try {
        let orders : IOrder[]
        if(role === UserRole.ADMIN){

            orders = await Order.find({userId : id}).sort({createdAt : -1})
           .skip((page - 1) * limit)
           .limit(limit)

        }else{
            orders = await Order.find({userId}).sort({createdAt : -1})
            .skip((page - 1) * limit)
            .limit(limit)
        }

        if(orders.length<0){
            return res.status(404).json({error : "NO orders found"})
        }

        res.status(201).send({msg : "All orders" , data : orders})
    } catch (error) {
        console.log('Error in getting data of the user');
        res.status(500).send({error  : 'Server error'})
    }
}

// for getting order details
export const getOrderbyId =async (req:Request , res : Response) => {
    const { id, userId , role} = req.body

    try {
        let order : IOrder;
        if(role === UserRole.ADMIN){
             order = await Order.findById(id)
        }else{
             order = await Order.findOne({_id : id ,userId : userId })
        }
        if(!order){
            return res.status(404).json({error : '  '})
        }

        return res.status(201).json({msg : `Order data of id - ${id}`,data : order})
    } catch (error) {
        console.log('error in getting order',error);
        res.status(500).send({error : "server error"})
    }
}


