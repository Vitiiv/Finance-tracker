import { AuthService } from "@/services/AuthService";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        email: '' as string,
        password: '' as string,
    }),
    actions: {
        async login(router: ReturnType<typeof useRouter>) {
            console.log(this.email, this.password)
            await AuthService.login(this.email, this.password)
                .then((response) => {
                    // Controla o que acontece após o login bem-sucedido
                    sessionStorage.setItem('access_token', response.data);
                    router.push('/dashboard');
                })
                .catch((error) => {
                    // Controla o que acontece após o login falhar
                    console.error("Login failed:", error);
                });
        },
    }
})