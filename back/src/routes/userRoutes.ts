import { Router } from "express";
import { createUsers, getUser, getUsers, loginUsers } from "../controllers/userController";

const userRouter:Router = Router();
//Create
userRouter.post('/users/register', createUsers);
userRouter.post('/users/login', loginUsers);
//Read
userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser);
//Update
//Delete

export default userRouter;