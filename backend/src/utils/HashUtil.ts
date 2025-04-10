// src/utils/HashUtil.ts
import bcrypt from 'bcrypt';

export class HashUtil {
    // Método estático para gerar o hash da senha
    public static async generateHash(password: string): Promise<string> {
        const saltRounds = parseInt(process.env.SALT_ROUNDS);  // Pega do .env ou usa 10 como padrão
        return bcrypt.hash(password, saltRounds);
    }

    // Método estático para comparar senha com hash
    public static async comparePassword(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
}