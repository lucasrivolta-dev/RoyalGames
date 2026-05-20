import styles from "./card-jogo.module.css"
import Link from "next/link";


type Jogo ={
    titulo: string;
    descricao: string;
    img: string;
    preco: number,
    jogoId: number,
    onDelete: (jogoId: number) => void,
    estaLogado: boolean
}



const CardJogo = ({titulo, descricao, img, preco, jogoId, onDelete, estaLogado}: Jogo) => {
    return (
        <article className={styles.card_jogo}>
            <Link href={"/detalhe/" + jogoId}>
                <img src="/imgs/jogo.svg" alt=""
                     className={styles.img_jogo} />
            </Link>
            <div className={styles.campo_itens}>
                <h3 className={styles.titulo_jogo}>Minecraft</h3>
                <p className={styles.valor_jogo}>R$39,00</p>
                <a href="/src/pages/detalhe" className={styles.linkDetalhes}>Detalhes</a>
                {estaLogado &&(
                    <>
                        <button onClick={() => onDelete(jogoId)}>
                            <p className={styles.botoes_admin}>Excluir</p>
                        </button>
                        <Link href={"/jogo?id=" + jogoId}>
                            <p className={styles.botoes_admin}>Editar</p>
                        </Link>
                    </>
                )}
            </div>
        </article>




    )
}

export default CardJogo;
