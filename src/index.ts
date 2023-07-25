import exress from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = exress()
const port = process.env.PORT



app.listen(port,()=>{
try {
    console.log('Connected to DB');
    console.log(`Listening on PORT ${port}`);
    
    
} catch (error) {
    console.log(error);
    
}    
})