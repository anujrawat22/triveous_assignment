import exress from 'express'
import dotenv from 'dotenv'
import { connection } from './config/db'
dotenv.config()
const app = exress()
const port = process.env.PORT



app.listen(port,async()=>{
try {
    await connection
    console.log('Connected to DB');
    console.log(`Listening on PORT ${port}`);
    
    
} catch (error) {
    console.log(error);
    
}    
})