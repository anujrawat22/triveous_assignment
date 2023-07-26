import express from 'express'
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

app.use("/api",homeRouter)
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", authMiddlware, cartRouter);
app.use("/api/order", authMiddlware, orderRouter);

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
    console.log(`Listening on PORT ${port}`);
  } catch (error) {
    console.log(error);
  }
});
