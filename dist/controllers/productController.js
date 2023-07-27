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
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProductById = exports.getProductbyCategory = void 0;
const productModel_1 = require("../models/productModel");
const getProductbyCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const products = yield productModel_1.Product.find({ category_id: id });
        res
            .status(201)
            .json({ msg: `Product data fro category id - ${id}`, data: products });
    }
    catch (error) {
        console.log("Error in getting product data", error);
        res.status(500).json({ Error: "Server error" });
    }
});
exports.getProductbyCategory = getProductbyCategory;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield productModel_1.Product.findById(id);
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
exports.getProductById = getProductById;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, price, description, specification, category_id, images, mainImage, brand, model, colours, warrantyPeriod } = req.body;
    try {
        const findProduct = yield productModel_1.Product.findOne({ title, model, brand });
        if (findProduct) {
            return res.status(400).json({ error: "Product already exists , try updating the product" });
        }
        const product = new productModel_1.Product({ title, price, description, specification, category_id, images, mainImage, brand, model, colours, warrantyPeriod });
        yield product.save();
        return res.status(201).send({ msg: "Product created succesfully" });
    }
    catch (error) {
        console.log("Error creating the product", error);
        res.status(500).send({ error: "Server error" });
    }
});
exports.addProduct = addProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { payload } = req.body;
    try {
        const product = yield productModel_1.Product.findById(id);
        if (!product) {
            return res.status(404).send({ error: "Product not found" });
        }
        yield productModel_1.Product.findByIdAndUpdate(id, payload);
        return res.status(201).send({ msg: `Product with id - ${id} updated`, data: product });
    }
    catch (error) {
        console.log("Error udating the product");
        res.status(500).send({ error: "Server error" });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield productModel_1.Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: "Product doesn't exists" });
        }
        yield productModel_1.Product.findByIdAndDelete(id);
        return res.status(204).send({ msg: `Product with id - ${id} deleted sucessfully` });
    }
    catch (error) {
        console.log("Error deleting the product");
        res.status(500).send({ error: "Server error" });
    }
});
exports.deleteProduct = deleteProduct;
