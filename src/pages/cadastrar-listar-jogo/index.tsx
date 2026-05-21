import {useState} from "react";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ListaCatalogo from "../../components/lista-jogo/lista-jogo";

import styles from "@/pages/cadastrar-listar-jogo/cadastrar-listar-jogo.module.css";

import {api} from "../api/api";
import {cadastrarJogo} from "@/pages/api/JogoService";

const CadastroJogo = () => {

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);

    const [generoIds, setGenero] = useState<number[]>([]);
    const [classificacaoID, setClassificacao] = useState<number>(0);
    const [plataformaIds, setPlataforma] = useState<number[]>([]);

    const [descricao, setDescricao] = useState("");

    const [imagem, setImagem] = useState<File | null>(null);

    const CadastrarJogo = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();

        try {

            const dados = {
                nome,
                preco,
                generoIds,
                descricao,
                imagem,
                plataformaIds,
                classificacaoID,
            }

            console.log(dados);
            await cadastrarJogo(dados);

            alert(
                "Jogo cadastrado com sucesso!"
            );

        } catch (error) {

            console.log(error);

            alert(
                "Erro ao cadastrar jogo"
            );
        }
    };

    return (
        <>
            <Header/>

            <section id={styles.cadastro_jogo}>

                <div className={`${styles.container_cadastro} layout_guide`}>

                    <div id={styles.cabecalho_cadastro}>

                        <h1>
                            Cadastrar novo jogo
                        </h1>

                        <hr/>

                    </div>

                    <form
                        onSubmit={CadastrarJogo}
                        id={styles.form_cadastro}
                    >

                        <div id={styles.area_cadastro_dados}>

                            <div id={styles.parte_esquerda}>

                                <div className={styles.campo}>

                                    <label>
                                        Nome
                                    </label>

                                    <input
                                        type="text"
                                        value={nome}
                                        onChange={(e) =>
                                            setNome(
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>

                                <div className={styles.meio}>

                                    <div className={styles.campo}>

                                        <label>
                                            Valor
                                        </label>

                                        <input
                                            type="number"
                                            value={preco}
                                            onChange={(e) =>
                                                setPreco(
                                                    Number(
                                                        e.target.value
                                                    )
                                                )
                                            }
                                        />

                                    </div>

                                    <div className={styles.campo}>

                                        <label>
                                            Gênero
                                        </label>

                                        <select
                                            value={generoIds}
                                            onChange={(e) =>
                                                // MUDAR PARA O MODO CORRETO SELECT
                                                setGenero(
                                                    Array.from(e.target.selectedOptions).map((options) => Number(options.value))
                                                )
                                            }
                                        >

                                            <option value="">
                                                Selecione
                                            </option>

                                            <option value="1">
                                                Ação
                                            </option>

                                            <option value="2">
                                                Aventura
                                            </option>

                                            <option value="3">
                                                Tiro
                                            </option>

                                        </select>

                                    </div>

                                    <div className={styles.campo}>

                                        <label>
                                            Classificação
                                        </label>

                                        <select
                                            value={classificacaoID}
                                            onChange={(e) =>

                                                setClassificacao(
                                                    Number(e.target.value)
                                                )
                                            }
                                        >

                                            <option value="">
                                                Selecione
                                            </option>

                                            <option value="1">
                                                18
                                            </option>

                                            <option value="2">
                                                16
                                            </option>

                                            <option value="3">
                                                12
                                            </option>

                                            <option value="4">
                                                Livre
                                            </option>

                                        </select>

                                    </div>

                                </div>

                                <div className={styles.baixo}>

                                    <div className={styles.campo}>

                                        <label>
                                            Plataforma
                                        </label>

                                        <select
                                            value={plataformaIds}
                                            onChange={(e) =>
                                                // MUDAR PARA O MODO CORRETO SELECT
                                                setPlataforma(
                                                    Array.from(e.target.selectedOptions).map((options) => Number(options.value))
                                                )
                                            }
                                        >

                                            <option value="">
                                                Selecione
                                            </option>

                                            <option value="1">
                                                Playstation
                                            </option>

                                            <option value="2">
                                                Xbox
                                            </option>

                                            <option value="3">
                                                PC
                                            </option>

                                        </select>

                                    </div>

                                    <div className={styles.campo}>

                                        <label>
                                            Imagem
                                        </label>

                                        <input
                                            type="file"
                                            onChange={(e) => {

                                                if (
                                                    e.target.files
                                                ) {

                                                    setImagem(
                                                        e.target.files[0]
                                                    );
                                                }
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>

                            <div id={styles.parte_direita}>

                                <div className={styles.campo}>

                                    <label>
                                        Descrição
                                    </label>

                                    <textarea
                                        value={descricao}
                                        onChange={(e) =>
                                            setDescricao(
                                                e.target.value
                                            )
                                        }
                                    ></textarea>

                                </div>

                            </div>

                        </div>

                        <button type="submit">
                            Cadastrar
                        </button>

                    </form>

                </div>

            </section>

            <div className={styles.container_jogo}>

                <section
                    className={styles.lista_jogos}
                    id="catalogo"
                >

                    <div className={`${styles.container_lista} layout_guide`}>

                        <div id={styles.cabecalho_lista}>

                            <h2>
                                Lista de Jogos
                            </h2>

                            <hr/>

                        </div>

                        <ListaCatalogo/>

                    </div>

                </section>

                <div className={styles.area_paginacao}>

                    <button>
                        {"<"}
                    </button>

                    <button>
                        1
                    </button>

                    <button>
                        2
                    </button>

                    <button>
                        3
                    </button>

                    <button>
                        4
                    </button>

                    <button>
                        {">"}
                    </button>

                </div>

            </div>

            <Footer/>

        </>
    );
};

export default CadastroJogo;