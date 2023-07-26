import { Request , Response ,Router} from "express";

const homeRouter = Router()

homeRouter.get("/",(req : Request , res  : Response)=>{
    res.send("<h1>Welcome to trevious ecommerce app</h1>")
})

export default homeRouter;