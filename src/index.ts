import exress from "express";
import dotenv from "dotenv";
import { connection } from "./config/db";
import userRouter from "./routers/userRouter";
import categoryRouter from "./routers/categoryRouter";
import productRouter from "./routers/productRouter";
import cartRouter from "./routers/cartRouter";
import orderRouter from "./routers/orderRouter";
import { authMiddlware } from "./middlewares/authenticationMiddleware";
dotenv.config();
import { Request, Response } from "express";
const app = exress();
const port = process.env.PORT;

app.use(exress.json());

app.get("/",(req : Request, res : Response)=>{
res.send('<h1>Welcome to ecommerce app</h1>')
})
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
