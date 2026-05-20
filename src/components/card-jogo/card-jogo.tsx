import styles from "./card-jogo.module.css"
import Link from "next/link";


type Jogo ={
    titulo: string;
    img: string;
    preco: number,
    jogoId: number,
    onDelete?: (jogoId: number) => void | undefined,
    estaLogado?: boolean
}

const CardJogo = ({titulo, img, preco, jogoId, onDelete, estaLogado}: Jogo) => {
    return (
        <article className={styles.card_jogo}>
            <Link href={"/detalhe/" + jogoId}>
                <img
                    src={img}
                    alt={titulo}
                    className={styles.img_jogo}
                />
            </Link>

            <div className={styles.campo_itens}>
                <h3 className={styles.titulo_jogo}>
                    {titulo}
                </h3>

                <p className={styles.valor_jogo}>
                    R${preco}
                </p>

                <Link
                    href={"/detalhe/" + jogoId}
                    className={styles.linkDetalhes}
                >
                    Detalhes
                </Link>

                {estaLogado && (
                    <>
                        <button onClick={() => onDelete ? onDelete(jogoId) : ''}>
                            <p className={styles.botoes_admin}>
                                Excluir
                            </p>
                        </button>

                        <Link href={"/jogo?id=" + jogoId}>
                            <p className={styles.botoes_admin}>
                                Editar
                            </p>
                        </Link>
                    </>
                )}
            </div>
        </article>




    )
}

export default CardJogo;
