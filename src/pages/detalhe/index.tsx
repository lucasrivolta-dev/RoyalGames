import Header from "@/components/header/header";
import styles from "./detalhe.module.css";
import Footer from "@/components/footer/footer";

const DetalheJogo = () => {
    return (
        <>
            <Header />
            <div className={styles.parte_toda}>
                <h1>Detalhes do Jogo</h1>

                <div className={styles.container_descricao}>
                    <img
                        src="/imgs/jogo.svg"
                        alt="Banner de jogos"
                        className={styles.img_curiosidades}
                    />

                    <div className={styles.texto_descricao}>
                        <h1>League of Legends</h1>
                        <p>League of Legends (LoL) é um jogo eletrônico do gênero MOBA (Multiplayer Online Battle Arena) onde duas equipes de cinco
                            jogadores competem entre si com o objetivo de destruir a base adversária. Cada jogador controla um campeão com
                            habilidades únicas, exigindo estratégia, trabalho em equipe e tomada de decisões rápidas durante as partidas.</p>

                        <p>O jogo possui diversos modos, mapas e estilos de jogo, além de oferecer
                            atualizações frequentes com novos personagens, eventos e ajustes de balanceamento. League of Legends é conhecido pelo seu cenário competitivo mundial,
                            reunindo milhões de jogadores e campeonatos profissionais ao redor do mundo.</p>
                    </div>
            </div>
                <div className={styles.informacoes}>
                <div className={styles.informacoes_jogo}>
                    <h1>Classificação Indicativa: 18 anos</h1>
                    <h1>Generos: Terror</h1>
                </div>
                <div className={styles.informacoes_jogo}>
                    <h1>Preço: R$100,00</h1>
                    <h1>Plataformas: PS5</h1>
                </div>
                    </div>
            </div>
            <Footer />
        </>

        );
            };
 export default DetalheJogo;