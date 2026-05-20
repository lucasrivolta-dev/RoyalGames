import Header from "@/components/header/header";
import styles from "./home.module.css";
import CardJogo from "@/components/card-jogo/card-jogo";
import Footer from "@/components/footer/footer";

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

                <div className={styles.aba_pesquisar}>
                        <input className={styles.pesquisar_botao} type="search" name="q" placeholder="Pesquise..." required/>
                        <button type="submit" name="ordem" value="menor_preco" className={styles.menor_preco_botao}>
                            Menor Preço
                        </button>
                        <select name="categoria" className={styles.categoria_botao}>
                            <option value="Categoria">Categoria</option>
                            <option value="acao">Ação / Aventura</option>
                            <option value="rpg">RPG</option>
                            <option value="esportes">Esportes / Corrida</option>
                            <option value="estrategia">Estratégia</option>
                            <option value="terror">Terror / Sobrevivência</option>
                        </select>
                </div>

                <section className={styles.lista_jogos}>
                    <div className={`${styles.container_catalogo} layout_guide`}>
                        <CardJogo/>
                        <CardJogo/>
                        <CardJogo/>
                    </div>
                    <div className={`${styles.container_catalogo} layout_guide`}>
                        <CardJogo/>
                        <CardJogo />
                        <CardJogo />
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