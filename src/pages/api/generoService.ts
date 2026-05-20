import { api } from "./api";

export async function cadastrarGenero(nome: string) {
    try {
        await api.post("Genero", { nome });
        // console.log("eba deu certo 🤗")
    } catch (error: any) {
        // console.log(error.response.data)
        throw new Error(error.response.data);
    }
}

export async function listarGenero() {
    try {
        const response = await api.get("Genero");
        return response;
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}