import Link from 'next/link';
import styles from './header.module.css';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();

    const redirect = () => {
        router.push('/login');
    };

    return (
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
                <img src="/imgs/LogoHeader.svg" alt="Logo" />


                <div className={styles.menu}>
                <Link href="#catalogo" className={styles.link}>
                    <p>Catalogo</p>
                </Link>

                <button className={styles.btn_icon} onClick={redirect}>
                    <Link href="/login" className={styles.link}>
                    <p>Login</p>
                        </Link>
                </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
