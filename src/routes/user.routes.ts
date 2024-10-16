import { Router } from "express";
import { CreateUserController } from "../modules/user/usesCases/createUser/CreateUserController";

const createUserController = new CreateUserController();
const userRoutes : Router = Router()

userRoutes.post('/', createUserController.handle);

export { userRoutes };
