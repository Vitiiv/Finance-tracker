// Importa tipos 'Request' e 'Response' do Express para definir requisições e respostas.
import { Request, Response } from "express";

// Define a classe 'LoginController' para organizar a lógica de login.
export class LoginController {
    
    // Função assíncrona que lida com a autenticação de login.
    public async loginAuth(req: Request, res: Response): Promise<void> {
        // Envia uma resposta com status 200 (sucesso) e uma mensagem.
        console.log(req.body);
        res.send({ status: 200, msg: 'Login bem sucedido' });
    }
}