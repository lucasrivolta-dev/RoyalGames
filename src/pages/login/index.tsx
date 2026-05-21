import { useState } from "react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import {login} from "@/pages/api/authService";

const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter();
    const notificacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

    async function autenticar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(email, senha);
            notificacao("Login bem sucedido!")


            setTimeout(() => {
                router.push("/home");
            }, 2000);

        } catch (error: any) {
            erro(error.message);
        }
    }

    return (
        <>
            <main id={styles.main}>
                <div id={styles.imagem_login}>
                    <img src="/imgs/mulherlogin.svg" alt="" />
                </div>
                <div id={styles.campo_login}>
                    <img src="/imgs/Vector.svg" alt=""/>
                    <form id={styles.formulario} onSubmit={autenticar}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email"
                                   value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha"
                                   value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <div className={styles.botao}>
                        <button >
                            Entrar
                        </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login;