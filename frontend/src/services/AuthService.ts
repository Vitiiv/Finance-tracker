import axiosInstance from "./Axios";

export class AuthService {
    static async login(email: string, password: string) {
        return axiosInstance.post("/auth/login", {
            email, password
        });
    }

    static async validateToken() {
        return axiosInstance.get("/auth/verify-token")
    }

}