// Importa o 'Router' do Express para definir rotas.
import { Router } from "express";
// Importa o controlador de login que contém a lógica.
import { LoginController } from "../controllers/loginController";

// Cria um objeto de rotas para login.
const loginRouter = Router();

// Cria uma instância do controlador de login.
const loginController = new LoginController();

// Define a rota GET '/login' que usa a função 'loginAuth' do controlador.
loginRouter.post('/login', loginController.loginAuth);

// Exporta as rotas de login.
export default loginRouter;