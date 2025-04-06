import { Router } from "express";
import { LoginController } from "../controllers/loginController";

const loginRouter = Router();

// constante loginController = classe do tipo LoginController
const loginController = new LoginController();

loginRouter.get('/login', loginController.loginAuth);

export default loginRouter 