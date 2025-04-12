import { HashUtil } from "../utils/HashUtil";
import { SupabaseService } from "./SupaBaseService";

// Esta classe é responsável por gerenciar a autenticação de usuários
// Usamos o termo 'extend' para herdar o comportamento de SupabaseService
// A classe AuthService é uma extensão da classe SupabaseService
// Isso significa que AuthService terá todas as propriedades e métodos de SupabaseService
export class AuthService extends SupabaseService {

    public async signIn(email: string, password: string) : Promise<any> {
        // Deixamos o parametro token em branco, pois o nosso usuário não tem um token ainda
        // O token é gerado quando o usuário faz login com sucesso
        const supabaseService = await this.createAuthenticatedClient('');

        // Fazemos a autenticação do usuário com email e senha
        const { data, error } = await supabaseService.auth.signInWithPassword({ email, password });

        if (error) {
            return { error: error.message };
        }

        // Se o login for bem-sucedido, retornamos os dados do usuário
        return { data };
    }

    public async validateToken(token: string) : Promise<boolean> {
        // Fazemos a autenticação do usuário com o token
        const supabaseService = await this.createAuthenticatedClient(token);

        // Verificamos se o token é válido
        const { error } = await supabaseService.auth.getUser();

        if (error) return false; // Token inválido

        // Se o token for válido, retornamos true
        return true;
    }
}