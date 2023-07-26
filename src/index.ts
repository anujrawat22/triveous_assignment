import express from 'express'
import dotenv from "dotenv";
import { connection } from "./config/db";
import userRouter from "./routes/userRouter";
import categoryRouter from "./routes/categoryRouter";
import productRouter from "./routes/productRouter";
import cartRouter from "./routes/cartRouter";
import orderRouter from "./routes/orderRouter";
import { authMiddlware } from "./middlewares/authenticationMiddleware";
import homeRouter from "./routes/router";
import cors from 'cors'

dotenv.config();

const app = express();
const port = process.env.PORT;
import swaggerUi from 'swagger-ui-express';

import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Trevious ecommerce assignment',
      version: '1.0.0',
    },
    servers : [
      {
        url : "https://trivious.onrender.com"
      }
    ]
  },
  apis: ['./routes/*.ts'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

app.use(express.json());
app.use(cors())
app.use("/docs",swaggerUi.serve,swaggerUi.setup(openapiSpecification))
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
