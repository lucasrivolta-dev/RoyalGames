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

    useEffect(() => {
        listar();
    }, []);


    return (
        <>
            <div className={styles.container_jogos}>

            <div id={styles.botoes_home}>


                <div className={styles.containerPesquisa}>
                    <input
                        type="text"
                        placeholder="Pesquisar jogo..."
                        className={styles.inputPesquisa}
                    />
                </div>

                <select
                    className={styles.botao}
                    value={ordem}
                    onChange={(e) => setOrdem(e.target.value)}
                >
                    <option value="todos">Todos</option>
                    <option value="menor_valor">Menor valor</option>
                    <option value="maior_valor">Maior valor</option>
                </select>

                <select
                    className={styles.botao}
                    value={ordem}
                    onChange={(e) => setOrdem(e.target.value)}
                >
                    <option value="">Escolha um gênero</option>

                    <option value="Acao">Ação</option>
                    <option value="Aventura">Aventura</option>
                    <option value="RPG">RPG</option>
                    <option value="MundoAberto">Mundo Aberto</option>
                    <option value="Terror">Terror</option>
                    <option value="Sobrevivencia">Sobrevivência</option>
                    <option value="FPS">FPS</option>
                    <option value="BattleRoyale">Battle Royale</option>
                    <option value="Corrida">Corrida</option>
                    <option value="Esporte">Esporte</option>
                    <option value="Estrategia">Estratégia</option>
                    <option value="Simulacao">Simulação</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="HackAndSlash">Hack and Slash</option>
                    <option value="SoulsLike">Souls Like</option>
                    <option value="Indie">Indie</option>
                    <option value="Retro">Retrô</option>
                    <option value="Cooperativo">Cooperativo</option>
                    <option value="Multiplayer">Multiplayer</option>
                </select>

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
                        jogoID={item.jogoID}
                        nome={item.nome}
                        preco={item.preco}
                        imagemUrl={item.imagemUrl}
                    />
                )) : (
                    <p>Carregando jogos.</p>
                )}
            </div>
            </div>
        </>
    )


}
export default ListaJogo;