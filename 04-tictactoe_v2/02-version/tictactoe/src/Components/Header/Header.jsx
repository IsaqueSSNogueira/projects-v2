
import styles from "./Header.module.css"
import ReturnPageButton from "./ReturnPageButton/ReturnPageButton";



const Header = ({ isStartScreen, to }) => {


    return (
        <header className={styles.header}>

            {!isStartScreen && <ReturnPageButton to={to} />}

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