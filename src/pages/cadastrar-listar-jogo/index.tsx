import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./cadastrar-listar-jogo.module.css";

const CadastrarListarJogo = () => {
    return (
        <>
            <Header />

            <main id={styles.pagina_cadastro_jogos}>

                <section className={styles.container_principal}>

                    <div className={styles.box_cadastro_jogo}>

                        <h1>Cadastrar novo jogo</h1>

                        <form className={styles.formulario_jogo}>

                            <div className={styles.coluna_inputs}>

                                <div className={styles.campo_formulario}>
                                    <label>Nome</label>
                                    <input type="text" />
                                </div>

                                <div className={styles.linha_campos}>

                                    <div className={styles.campo_formulario}>
                                        <label>Valor</label>
                                        <input type="text" />
                                    </div>

                                    <div className={styles.campo_formulario}>
                                        <label>Gênero</label>
                                        <input type="text" />
                                    </div>

                                    <div className={styles.campo_formulario}>
                                        <label>Classificação Indicativa</label>
                                        <input type="text" />
                                    </div>

                                </div>

                                <div className={styles.linha_campos}>

                                    <div className={styles.campo_formulario}>
                                        <label>Plataforma</label>

                                        <select>
                                            <option>Selecione</option>
                                        </select>
                                    </div>

                                    <div className={styles.campo_formulario}>
                                        <label>Imagem</label>
                                        <input type="text" />
                                    </div>

                                </div>

                            </div>

                            <div className={styles.campo_descricao}>
                                <label>Descrição</label>
                                <textarea></textarea>
                            </div>

                        </form>

                        <button className={styles.botao_cadastrar_jogo}>
                            Cadastrar
                        </button>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
};

export default CadastrarListarJogo;