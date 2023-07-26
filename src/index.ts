import exress from 'express'
import dotenv from 'dotenv'
import { connection } from './config/db'
import userRouter from './routers/userRouter'
import categoryRouter from './routers/categoryRouter'
import productRouter from './routers/productRouter'
import cartRouter from './routers/cartRouter'
import orderRouter from './routers/orderRouter'
dotenv.config()
const app = exress()
const port = process.env.PORT

app.use(exress.json())
app.use("/api/user",userRouter)
app.use("/api/category",categoryRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.listen(port,async()=>{
try {
    await connection
    console.log('Connected to DB');
    console.log(`Listening on PORT ${port}`);
    
    
} catch (error) {
    console.log(error);
    
}    
})