import { api } from "./api";


type JogoFormulario = {
    nome: string,
    descricao: string,
    preco: string,
    imagem: File | null,
    categoriasId: number[]
}

interface JogoListagem {
    nome: string,
    descricao: string,
    preco: string,
    categoriasId: number[],
    imagemUrl: string,
    statusJogo: boolean
}

export async function cadastrarJogo(dados: JogoFormulario) {
    try {
        const formData = new FormData();

        formData.append("nome", dados.nome);
        formData.append("descricao", dados.descricao);
        formData.append("preco", dados.preco);
        if (dados.imagem) {
            formData.append("imagem", dados.imagem);
        }
        dados.categoriasId.forEach((id) => {
            formData.append("categoriaIds", id.toString());
        })

        await api.post("Jogo", formData);

        // console.log("eba deu bom!! 🍔🥳🤪😎")

    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function listarJogo() {
    try {
        const response = await api.get("Jogo");

        const jogosAtivos = response.data.filter(
            (jogo: JogoListagem ) => jogo.statusJogo === true
        );

        // adiciona URL completa da imagem
        const jogos = jogosAtivos.map((jogo: JogoListagem) => ({
            ...jogo,
            imagemUrl: `${api.defaults.baseURL}${jogo.imagemUrl}`
        }));

        return jogos;

    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function listarPorId(id: number) {
    try {
        const response = await api.get("Jogo/" + id);

        const jogo = {
            ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`
        };

        return jogo;

    } catch (error: any) {
        throw new Error(error.response.data)
    }
}

export async function excluirJogo(jogoId: number) {
    try {
        await api.delete("Jogo/" + jogoId)
    } catch (error: any) {
        throw new Error(error.response.data)
    }
}

export async function editarJogo(jogoId: number, dados: JogoFormulario) {
    try {
        const formData = new FormData();

        formData.append("nome", dados.nome);
        formData.append("descricao", dados.descricao);
        formData.append("preco", dados.preco);
        if (dados.imagem) {
            formData.append("imagem", dados.imagem);
        }
        dados.categoriasId.forEach((id) => {
            formData.append("categoriaIds", id.toString());
        })

        await api.put("Jogo/" + jogoId, formData)

    } catch (error: any) {
        throw new Error(error.response.data);
    }
}