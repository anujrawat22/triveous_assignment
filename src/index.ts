import exress from 'express'
import dotenv from 'dotenv'
import { connection } from './config/db'
import userRouter from './routers/userRouter'
dotenv.config()
const app = exress()
const port = process.env.PORT


app.use("/api/user",userRouter)


app.listen(port,async()=>{
try {
    await connection
    console.log('Connected to DB');
    console.log(`Listening on PORT ${port}`);
    
    
} catch (error) {
    console.log(error);
    
}    
})