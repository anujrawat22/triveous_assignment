var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import dotenv from "dotenv";
import { connection } from "./config/db";
import userRouter from "./routers/userRouter";
import categoryRouter from "./routers/categoryRouter";
import productRouter from "./routers/productRouter";
import cartRouter from "./routers/cartRouter";
import orderRouter from "./routers/orderRouter";
import { authMiddlware } from "./middlewares/authenticationMiddleware";
import homeRouter from "./routers/router";
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/api", homeRouter);
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", authMiddlware, cartRouter);
app.use("/api/order", authMiddlware, orderRouter);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection;
        console.log("Connected to DB");
        console.log(`Listening on PORT ${port}`);
    }
    catch (error) {
        console.log(error);
    }
}));
