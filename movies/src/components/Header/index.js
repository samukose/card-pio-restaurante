import styles from './Header.module.css';


function Header() {
    return (
        <header className={styles.header}>
            <spam>flix</spam>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    )

}


export default Header;