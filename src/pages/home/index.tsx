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
                <section className={styles.lista_jogos}>
                    <div className={`${styles.container_catalogo} layout_guide`}>
                        <CardJogo />
                        <CardJogo />
                        <CardJogo />
                    </div>
                    <div className={`${styles.container_catalogo} layout_guide`}>
                        <CardJogo />
                        <CardJogo />
                        <CardJogo />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;