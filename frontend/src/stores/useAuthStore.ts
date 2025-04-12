import { AuthService } from "@/services/AuthService";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        email: '' as string,
        password: '' as string,
    }),
    actions: {
        async login() {
            console.log(this.email, this.password)
            await AuthService.login(this.email, this.password)
            .then((response) => {
                // Controla o que acontece após o login bem-sucedido
                console.log("Login successful:", response.data);
            })
            .catch((error) => {
                // Controla o que acontece após o login falhar
                console.error("Login failed:", error);
            });
        },

    }
})