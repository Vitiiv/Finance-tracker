// Importa tipos 'Request' e 'Response' do Express para definir requisições e respostas.
import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import path from "path";

// Define a classe 'LoginController' para organizar a lógica de login.
export class LoginController {

    // Função assíncrona que lida com a autenticação de login.
    public async loginAuth(req: Request, res: Response): Promise<void> {
        // Extrai email e password do corpo da requisição.
        const { email, password } = req.body;
        // Cria uma instância do AuthService para autenticação.
        const authService = new AuthService();

        // Tenta autenticar o usuário com email e senha.
        authService.signIn(email, password)
            .then(async (responseAuth) => {
                res.status(200).json(responseAuth.data.session.access_token);
            })
            .catch((error) => {
                // Se ocorrer um erro, envia uma resposta de erro 401 (não autorizado).
                res.status(401).json({ error: error.message });
            });
    }

    public async verifyToken(req: Request, res: Response): Promise<void> {
        const token = req.headers.authorization?.split(" ")[1] as string;
        const authService = new AuthService();
        const isAuthenticated = await authService.validateToken(token);

        if (isAuthenticated == false) {
            res.status(401).json({
                message: 'Token Invalido'
            })
            return
        }

        res.status(200).json({ message: 'Token Valido', token });
    }
}
