import CardJogo from "../card-jogo/card-jogo";
import styles from "./lista-jogo.module.css";
import Link from "next/link";
import {useEffect, useState} from "react";
import {excluirJogo, listarJogo} from "@/pages/api/JogoService";
import {erro, notificacao, toastConfirmarExclusao} from "@/utils/toast";
import {verificarAutenticacao} from "@/utils/auth";

interface Genero {
    generoID: number;
    nome: string;
}

interface Jogo {
    jogoID: number;
    nome: string;
    preco: number;
    descricao: string;
    imagemUrl: string;
    statusJogo: boolean;
}

const ListaJogo = () => {

    const [jogos, setJogos] = useState<Jogo[]>([]);
    const [ordem, setOrdem] = useState("todos");
    const [pesquisa, setPesquisa] = useState("");
    const [estaAutenticado, setEstaAutenticado] = useState(false);


    async function listar() {
        try {

            const lista = await listarJogo();

            setJogos(lista);
            console.log(lista);

        } catch (error: any) {

            console.log(error.message);

        }
    }

    // function confirmarExclusao(jogoId: number) {
    //
    //     toastConfirmarExclusao(async () => {
    //
    //         try {
    //
    //             await excluirJogo(jogoId);
    //
    //             setJogos((listaAtual) =>
    //                 listaAtual.map((jogo) =>
    //                     jogo.jogoID === jogoId
    //                         ? {...jogo, statusJogo: false}
    //                         : jogo
    //                 )
    //             );
    //
    //             notificacao("Jogo inativado!");
    //
    //             listar();
    //
    //         } catch (error: any) {
    //
    //             console.log(error.message);
    //
    //         }
    //     });
    // }

    useEffect(() => {
        listar();
    }, []);

    // const jogosFiltrados = jogos
    //     .filter((jogo) =>
    //         (jogo.nome || "")
    //             .toLowerCase()
    //             .includes(pesquisa.toLowerCase())
    //     )
    //     .sort((a, b) => {
    //
    //         if (ordem === "menor_valor") {
    //             return a.preco - b.preco;
    //         }
    //
    //         if (ordem === "maior_valor") {
    //             return b.preco - a.preco;
    //         }
    //
    //         return a.jogoID - b.jogoID;
    //
    //     });

    return (
        <>
            <div id={styles.botoes_home}>

                <select
                    className={styles.botao}
                    value={ordem}
                    onChange={(e) => setOrdem(e.target.value)}
                >
                    <option value="todos">Todos</option>
                    <option value="menor_valor">Menor valor</option>
                    <option value="maior_valor">Maior valor</option>
                </select>

                <div>

                    <label htmlFor="pesquisa">
                        Pesquise
                    </label>

                    <input
                        type="text"
                        name="pesquisa"
                        id="pesquisa"
                        placeholder="Digite o nome do jogo"
                        value={pesquisa}
                        onChange={(e) =>
                            setPesquisa(e.target.value)
                        }
                    />

                </div>

                {estaAutenticado && (
                    <div id={styles.botoes_direita}>

                        <Link
                            className={styles.botao}
                            href="/jogo"
                        >
                            Adicionar jogo
                        </Link>

                    </div>
                )}

            </div>

            <div id={styles.cards_jogos}>
                {jogos.length > 0 ? jogos.map((item) => (
                    <CardJogo
                        key={item.jogoID}
                        jogoId={item.jogoID}
                        nome={item.nome}
                        preco={item.preco}
                        imagemUrl={item.imagemUrl}
                    />
                )) : (
                    <p>Carregando jogos.</p>
                )}
            </div>
        </>
    )


}
export default ListaJogo;