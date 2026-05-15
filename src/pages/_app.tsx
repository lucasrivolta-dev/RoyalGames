import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { Orbitron, Exo_2 } from "next/font/google";

const orbitron = Orbitron({
    variable: "--font-titulo",
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

const exo = Exo_2({
    variable: "--font-padrao",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${orbitron.variable} ${exo.variable}`}>
            <Component {...pageProps} />
            <ToastContainer/>
        </main>
    )
}
