import { defineStore } from "pinia";
import axios from "axios";

export const useLoginStores = defineStore('useLoginStores', {
    state: () => ({ //somente variaveis
        dataAPI: {}
    }),
    actions: { //somente métodos
        async getData() {
            await axios.get('http://localhost:3010/auth/login')
                .then(response => { this.dataAPI = response.data }) //trazer caso de sucesso -> then
                .catch(error => { console.log(error) }) //trazer caso de erro -> catch
        }
    }
})