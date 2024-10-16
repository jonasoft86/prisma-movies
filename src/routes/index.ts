import { Router } from "express";
import { userRoutes } from "./user.routes";

const routes : Router = Router()

routes.use("/users",userRoutes)

export {routes}