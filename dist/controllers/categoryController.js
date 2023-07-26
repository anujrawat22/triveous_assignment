var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Category } from "../models/categoryModel";
export const getAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryData = yield Category.find()
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
export const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
