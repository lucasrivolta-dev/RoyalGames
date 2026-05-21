import styles from "./card-jogo.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Jogo = {
    titulo: string;
    imagemUrl: string;
    preco: number;
    jogoId: number;
    onDelete?: (jogoId: number) => void;
    estaLogado?: boolean;
};

const CardJogo = ({
                      titulo,
                      imagemUrl,
                      preco,
                      jogoId,
                      onDelete,
                      estaLogado
                  }: Jogo) => {

    const router = useRouter();

    const redirect = () => {
        router.push("/detalhe/");
    };

    return (
        <article className={styles.card_jogo}>

            <Link href={"/detalhe/"}>
                <img
                    src={imagemUrl}
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

                <button className={styles.btn_icon} onClick={redirect}>
                    <Link href="/detalhe" className={styles.link}>
                        <p>Detalhes</p>
                    </Link>
                </button>

                {estaLogado && (
                    <>
                        <button
                            onClick={() => onDelete?.(jogoId)}
                        >
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
    );
};

export default CardJogo;