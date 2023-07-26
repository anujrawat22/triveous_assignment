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
exports.createCategory = exports.getAllCategory = void 0;
const categoryModel_1 = require("../models/categoryModel");
const getAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryData = yield categoryModel_1.Category.find()
            .populate("parentCategory", "name")
            .populate("subCategories", "name");
        if (categoryData.length == 0) {
            res
                .status(404)
                .json({ msg: "No category data found", data: categoryData });
        }
        else {
            res.status(201).json({ msg: "All categories Data", data: categoryData });
        }
    }
    catch (error) {
        console.log("Error in getting All categories data", error);
        res.status(500).json({ Error: "Server error" });
    }
});
exports.getAllCategory = getAllCategory;
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
exports.createCategory = createCategory;
