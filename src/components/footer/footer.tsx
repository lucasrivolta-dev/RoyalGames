import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer id={styles.footer_home}>
            <div className={`layout_guide ${styles.container}`}>
                    <img src="/imgs/Vector.svg" alt=""
                    className={styles.logo_royalgames_footer}/>
                <div className={styles.infos}>
                <p>royalgames@email.com</p>
                <p>(11)99999-9999</p>
                <p>eRoyalGames</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;