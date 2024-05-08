import { Router } from "express";
import { 
    getAllUsersController,
    getUserByIdController,
    postUserRegisterController,
    postUserLoginController 
} from "../../controllers/user";
const routerUser: Router = Router();

// /users/
routerUser.get("/", getAllUsersController);
// /users/2
routerUser.get("/:id", getUserByIdController);
// /users/register
routerUser.post("/register", postUserRegisterController);
// /users/login
routerUser.post("/login", postUserLoginController);

export default routerUser; 