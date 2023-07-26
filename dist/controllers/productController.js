var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Product } from "../models/productModel";
export const getProductbyCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const products = yield Product.find({ category_id: id });
        res
            .status(201)
            .json({ msg: `Product data fro category id - ${id}`, data: products });
    }
    catch (error) {
        console.log("Error in getting product data", error);
        res.status(500).json({ Error: "Server error" });
    }
});
export const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield Product.findById(id);
        if (!product) {
            res.status(404).json({ msg: `Product data for product id - ${id} not found` });
        }
        else {
            res.status(201).send({ msg: `Product data for id - ${id}`, data: product });
        }
    }
    catch (error) {
        console.log('Error in getting product data by id', error);
        res.status(500).send({ Error: "Server Error" });
    }
});
export const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
export const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
export const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
