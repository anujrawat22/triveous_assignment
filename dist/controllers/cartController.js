"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCart = exports.deleteCartItem = exports.addtoCart = exports.getCartbyId = exports.getCart = void 0;
const cartModel_1 = require("../models/cartModel");
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    try {
        const cart = yield cartModel_1.Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }
        res.status(201).json({ msg: 'Cart data', data: cart });
    }
    catch (error) {
        console.log('Error getting item from cart', error);
        res.status(500).json({ error: "Server error" });
    }
});
exports.getCart = getCart;
const getCartbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const cart = yield cartModel_1.Cart.findOne({ userId: id });
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }
        res.status(201).json({ msg: `Cart of userId ${id}`, data: cart });
    }
    catch (error) {
        console.log('Error getting item from cart', error);
        res.status(500).json({ error: "Server error" });
    }
});
exports.getCartbyId = getCartbyId;
const addtoCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, productId, price, quantity } = req.body;
    try {
        let cart = yield cartModel_1.Cart.findOne({ userId });
        if (!cart) {
            cart = new cartModel_1.Cart({ userId, products: [] });
        }
        const existingProductIndex = cart.products.findIndex((item) => item.productId === productId);
        if (existingProductIndex !== -1) {
            cart.products[existingProductIndex].quantity += quantity;
        }
        else {
            cart.products.push({ productId, price, quantity });
        }
        yield cart.save();
        res.status(201).json({ msg: "Product added to cart", data: cart });
    }
    catch (error) {
        console.log('Error adding item to cart', error);
        res.status(500).json({ error: "Server error" });
    }
});
exports.addtoCart = addtoCart;
const deleteCartItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, productId } = req.body;
    try {
        const cart = yield cartModel_1.Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ error: "Cart not found." });
        }
        const existingProductIndex = cart.products.findIndex((item) => item.productId === productId);
        if (existingProductIndex !== -1) {
            cart.products.splice(existingProductIndex, 1);
            yield cart.save();
            res.status(201).json({ msg: 'Item deleted from cart', data: cart });
        }
        else {
            res.status(404).json({ error: "No product found in cart   " });
        }
    }
    catch (error) {
        console.log('Error deleting item from cart', error);
        res.status(500).json({ error: "Server error" });
    }
});
exports.deleteCartItem = deleteCartItem;
const updateCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, productId, quantity } = req.body;
    try {
        const cart = yield cartModel_1.Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ error: "Cart not found" });
        }
        const existingProductIndex = cart.products.findIndex((item) => item.productId === productId);
        if (existingProductIndex !== -1) {
            cart.products[existingProductIndex].quantity = quantity;
            yield cart.save();
            res.status(201).json({ msg: "Cart updated", data: cart });
        }
        else {
            res.status(404).json({ error: "Item in cart not found" });
        }
    }
    catch (error) {
    }
});
exports.updateCart = updateCart;
//# sourceMappingURL=cartController.js.map