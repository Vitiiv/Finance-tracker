import { AuthService } from "@/services/AuthService";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        email: '' as string,
        password: '' as string,
    }),
    actions: {
        async login() {
            await AuthService.login(this.email, this.password)
        }
    }
})