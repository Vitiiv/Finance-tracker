import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
    state: () => ({
        loading: false as boolean,
    }),
});