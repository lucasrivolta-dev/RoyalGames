import {api} from "./api";

export async function listarPorIdDoJogo(jogoId : number){
    try {
        const response = await api.get("LogJogo/jogo/" + jogoId);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response.data)
    }
}