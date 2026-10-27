
import styles from "./Header.module.css"


const Header = () => {


    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>
                <span className={styles.h1Hash}># </span>
                Tic Tac 
                <span className={styles.h1Highlight}> Toe</span>
            </h1>
            <h2 className={styles.h2}>CLÁSSICO, SIMPLES, DIVERTIDO</h2>
        </header>
    )
}


export default Header;