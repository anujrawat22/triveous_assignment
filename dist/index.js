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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const userRouter_1 = __importDefault(require("./routers/userRouter"));
const categoryRouter_1 = __importDefault(require("./routers/categoryRouter"));
const productRouter_1 = __importDefault(require("./routers/productRouter"));
const cartRouter_1 = __importDefault(require("./routers/cartRouter"));
const orderRouter_1 = __importDefault(require("./routers/orderRouter"));
const authenticationMiddleware_1 = require("./middlewares/authenticationMiddleware");
const router_1 = __importDefault(require("./routers/router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use("/api", router_1.default);
app.use("/api/user", userRouter_1.default);
app.use("/api/category", categoryRouter_1.default);
app.use("/api/product", productRouter_1.default);
app.use("/api/cart", authenticationMiddleware_1.authMiddlware, cartRouter_1.default);
app.use("/api/order", authenticationMiddleware_1.authMiddlware, orderRouter_1.default);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.connection;
        console.log("Connected to DB");
        console.log(`Listening on PORT ${port}`);
    }
    catch (error) {
        console.log(error);
    }
}));
