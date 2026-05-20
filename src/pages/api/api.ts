import axios from "axios";

const apiLocal = "https://localhost:7057/api/";

const apiRemota = "";

//criar um endereco da api dentro do axios
export const api = axios.create({
    baseURL: apiLocal
})

// interceptors:
// É um interceptor do Axios
// Ele intercepta (pega) toda requisição antes de ser enviada
api.interceptors.request.use((config) => {
    const token = secureLocalStorage.getItem("Token");

    if(token){
        config.headers.Authorization = "Bearer " + token;
        // config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});