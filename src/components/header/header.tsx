import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";


const header = () => {
    const Header = () => {
        return (
            <header id={styles.header}>
                <div className={`${styles.container} layout_guide`}>
                    <img src="../imgs/Logo Header.svg" alt=""/>
            </header>
        )
    }
}

export default Header;