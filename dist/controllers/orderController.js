var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Cart } from "../models/cartModel";
import { Order } from "../models/orderModel";
import { UserRole } from "../models/userModel";
// for creating order
export const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, shippingAddress, paymentMethod } = req.body;
    try {
        const cart = yield Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ error: "Cart not found" });
        }
        const newOrder = new Order({
            userId,
            products: cart.products,
            total: cart.products.reduce((total, item) => total + item.price * item.quantity, 0),
            shippingAddress,
            paymentMethod,
        });
        yield newOrder.save();
        cart.products = [];
        yield cart.save();
        res.status(201).json({ msg: "Order placed successfully" });
    }
    catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ error: "Server error." });
    }
});
//  for order history of user
export const allOrdersofUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    const { userId, role } = req.body;
    let { p, l } = req.query;
    let page;
    let limit;
    p ? page = +p : page = 1;
    l ? limit = +l : limit = 10;
    try {
        let orders;
        if (role === UserRole.ADMIN) {
            orders = yield Order.find({ userId: id }).sort({ createdAt: -1 })
                .skip((page - 1) * limit)
                .limit(limit);
        }
        else {
            orders = yield Order.find({ userId }).sort({ createdAt: -1 })
                .skip((page - 1) * limit)
                .limit(limit);
        }
        if (orders.length < 0) {
            return res.status(404).json({ error: "NO orders found" });
        }
        res.status(201).send({ msg: "All orders", data: orders });
    }
    catch (error) {
        console.log('Error in getting data of the user');
        res.status(500).send({ error: 'Server error' });
    }
});
// for getting order details
export const getOrderbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, userId, role } = req.body;
    try {
        let order;
        if (role === UserRole.ADMIN) {
            order = yield Order.findById(id);
        }
        else {
            order = yield Order.findOne({ _id: id, userId: userId });
        }
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        return res.status(201).json({ msg: `Order data of id - ${id}`, data: order });
    }
    catch (error) {
        console.log('error in getting order', error);
        res.status(500).send({ error: "server error" });
    }
});
