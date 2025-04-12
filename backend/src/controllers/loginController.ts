// Importa tipos 'Request' e 'Response' do Express para definir requisições e respostas.
import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

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
        .then(async (response) => {
            console.log(response)
            res.status(200).json(response.data);
        }).catch((error) => {
            // Se ocorrer um erro, envia uma resposta de erro 401 (não autorizado).
            res.status(401).json({ error: error.message });
        });
    }
}