import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
    state: () => ({
        loading: false as boolean,
        theme: (localStorage.getItem('theme') || 'light') as string,
    }),
    actions: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
      
            if (this.theme === 'dark') document.documentElement.classList.add('dark');
            else document.documentElement.classList.remove('dark');
            
            localStorage.setItem('theme', this.theme);
        }
    }
});