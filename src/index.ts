import "express-async-errors";
import express , {Express, NextFunction, Request, Response} from "express"
import { routes } from "./routes"
import { AppError } from "./errors/AppError";

const app:Express = express()

app.get('/',(req:Request,res:Response)=>{
    res.send('Working')
})
app.use(express.json())
app.use(routes)

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: "error",
          message: err.message,
        });
      }
  
      return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
      });
    }
);

app.listen(3000,()=>{ console.log("App working")})