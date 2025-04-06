import axiosInstance from "./Axios";

export class AuthService {
    static async login(email: string, password: string) {
        console.log(`Email: ${email}, Password: ${password}`);
    }
}