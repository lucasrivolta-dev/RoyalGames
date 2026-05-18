import Footer from "@/components/footer/footer"

import styles from "./detalhe-jogo.module.css"
import { useEffect, useState } from "react";
import { listarPorId } from "../../api/JogoService";
import { useParams } from "next/navigation";
import { formatarPreco } from "../../../utils/formatacao";

interface Jogo {
    nome: string,
    descricao: string,
    preco: number,
    imagemUrl: string,
    categorias: string[]
}

const DetalheJogo = () => {

    const [jogo, setJogo] = useState<Jogo>();

    const params = useParams();

    const id = params?.id;

    async function listarJogo() {
        try {
            const response = await listarPorId(Number(id));
            console.log(response)
            setJogo(response);
        } catch (error: any) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        if (!id) return;

        setTimeout(() => {
            listarJogo();
        }, 1000); // 1 segundo
    }, [id]);



    return (
        <>

            <main className={styles.main_detalhes}>
                <section className={`${styles.detalhes} layout_guide`}>
                    <article className={styles.card_detalhes} aria-label="Card de detalhes do jogo">
                        {jogo ? (
                            <>
                                <h1 id="titulo-detalhes-jogo" className={styles.detalhes_titulo}>Detalhes do {jogo?.nome}</h1>
                                <figure className={styles.card_detalhes_imagem} >
                                    <img
                                        src={jogo.imagemUrl}
                                        alt="Hambúrguer sobre uma tábua de madeira, com pão, carne, queijo, bacon, alface, tomate e cebola roxa." />
                                </figure>
                                <div className={styles.card_detalhes_infos}>
                                    <div className={`${styles.card_detalhes_col} ${styles.card_detalhes_col_esq}`}>
                                        <div className={styles.campo}>
                                            <h2 className={styles.campo_titulo}>Nome do jogo</h2>
                                            <p className={styles.campo_valor}>{jogo.nome}</p>
                                        </div>

                                        <div className={styles.campo}>
                                            <h2 className={styles.campo_titulo}>Descrição</h2>
                                            <p className={styles.campo_valor}>
                                                {jogo.descricao}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`${styles.card_detalhes_col} ${styles.card_detalhes_col_dir}`}>
                                        <div className={styles.campo}>
                                            <h2 className={styles.campo_titulo}>Preço (R$)</h2>
                                            <p className={styles.campo_valor}>
                                                <span className={styles.preco_atual}>{formatarPreco(jogo.preco)}</span>
                                                {/* <span className={styles.preco_anterior}>R$20,00</span> */}
                                            </p>
                                        </div>

                                        <div className={styles.campo}>
                                            <h2 className={styles.campo_titulo}>Categorias</h2>
                                            <ul className={styles.campo_lista}>
                                                {jogo.categorias.map((cat) => (
                                                    <li key={cat}>{cat}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (<p>Carregando jogo...</p>)}
                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default DetalheJogo