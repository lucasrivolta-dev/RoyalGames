import Header from "@/components/header/header";
import styles from "./home.module.css";
import CardJogo from "@/components/card-jogo/card-jogo";
import Footer from "@/components/footer/footer";
import ListaJogo from "@/components/lista-jogo/lista-jogo";

const Home = () => {
    return (
        <>
            <Header />

            <main>

                <section id={styles.banner}>
                    <div className={`${styles.container_banner} layout_guide`}>

                        <div id={styles.texto_banner}>
                            <h1>Conheça nossos Jogos</h1>

                            <p>
                                Navegue por títulos de todas as gerações,
                                descubra plataformas, gêneros e detalhes
                                completos antes de escolher sua próxima
                                aventura. Seu próximo jogo favorito começa aqui.
                            </p>
                        </div>

                        <img
                            src="/imgs/ImagemBanner.svg"
                            alt="Banner de jogos"
                            className={styles.img_banner}
                        />
                    </div>
                </section>
                <div className={styles.cabecalho_jogos}>
                        <h1 className={styles.titulo_jogos}>Catálogo de Jogos</h1>
                        <hr className={styles.linha_jogos}/>
                </div>

                <section className={styles.lista_jogos} id="catalogo">
                    <div className={`${styles.container_catalogo} layout_guide`}>
                        <ListaJogo />
                    </div>

                    <div className={styles.area_paginacao}>
                        <button>{"<"}</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>{">"}</button>
                    </div>

                    <div className={styles.curiosidades}>
                        <h1 className={styles.texto_curiosidade}>Jogos online podem afetar o comportamento humano?</h1>

                        <hr className={styles.linha_jogos}/>

                        <div className={styles.card_curiosidade}>
                            <img
                                src="/imgs/jogo.svg"
                                alt="Banner de jogos"
                                className={styles.img_curiosidades}
                            />

                            <img
                                src="/imgs/jogo.svg"
                                alt="Banner de jogos"
                                className={styles.img_curiosidades}
                            />
                        </div>
                    </div>
                        <div className={styles.texto_final}>
                    <p> Estudos indicam que jogos podem alterar o comportamento humano… </p>
                    <p> Principalmente quando o time resolve testar sua paciência em plena partida ranqueada.</p>
                        </div>


                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;