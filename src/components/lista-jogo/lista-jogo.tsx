import {useEffect, useState} from "react";
import { toastConfirmarExclusao } from "@/utils/toast";

interface Jogo {
    jogoID: number;
    nome: string;
    preco: number;
    descricao: string;
    imagemUrl: string;
    statusJogo: boolean;
}

const ListaJogos = () => {
    const [jogo, setJogo] = useState<Jogo[]>([]);

    const [ordem, setOrdem] = useState("todos");

    const [pesquisa, setPesquisa] = useState("");

    const [estaAutenticado, setEstaAutenticado] = useState(false);

    async function listar() {
        try {
            const lista = await listarJogos();
            setJogo(lista);
            console.log(lista);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    function confirmarExclusao(jogoId: number) {
        toastConfirmarExclusao(async () => {
            try {
                await exluirJogo(jogoId);

                setJogo((listaAtual) =>
                    listaAtual.map((jogo) =>
                        jogo.jogoID === jogoId
                            ? { ...jogo, statusJogo: false }
                            : jogo
                    )
                );
            } catch (error: any) {
                console.log(error.message);
            }
        })
    }

    useEffect(() => {
        setEstaAutenticado(verificarAutenticacao())
        listar();
    }, [])

    const jogosfiltrados = jogo.filter((jogo) =>
    jogo.nome.toLowerCase().includes(pesquisa.toLowerCase()))
        .sort((a, b) => {
            if(ordem === "menor_valor"){
                return a.preco - b.preco;
            }else if(ordem === "maior_valor"){
                return b.preco - a.preco;
            }
            return a.jogoID - b.jogoID;
        });
}

return(
    <>
    <div id={styles.botoes_home}>
        <select className={styles.botao} value={ordem} onChange={(e) => setOrdem(e.target.value)}>
            Filtrar

        </select>
    </div>
    </>
)