"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const productRouter = (0, express_1.Router)();
productRouter.get("/:id", productController_1.getProductbyCategory);
productRouter.get("/getProduct/:id", productController_1.getProductById);
productRouter.post("/create", productController_1.addProduct);
productRouter.patch("/update/:id", productController_1.updateProduct);
productRouter.delete("/delete/:id", productController_1.deleteProduct);
exports.default = productRouter;
