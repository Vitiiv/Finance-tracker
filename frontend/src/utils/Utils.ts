import { toast } from "vue-sonner";

// Essa classe é responsável por colocar as funções utilitárias que podem ser usadas em qualquer lugar do projeto
// Exemplo: funções de validação, formatação de dados, etc.
export class Utils {
    
    /**
     * Mostra um toast com o tipo, título e mensagem especificados.
     *
     * @param {string} type - O tipo do toast. Pode ser "success", "error", "info" ou "warning".
     * @param {string} title - O título do toast.
     * @param {string} [message] - A mensagem do toast. Opcional.
     */
    public static showToast(type: 'success' | 'error' | 'info' | 'warning', title: string, message?: string) {
        toast(title, {
            duration: 4000,
            position: 'top-right',
            description: message,
            style: {
                background: type === 'success' ? '#4ade80' : type === 'error' ? '#ef4444' : type === 'info' ? '#3b82f6' : '#f59e0b',
                color: '#fff',
            },
        });
    }
}