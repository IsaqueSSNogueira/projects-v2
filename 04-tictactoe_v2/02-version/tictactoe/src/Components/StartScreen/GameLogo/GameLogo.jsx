
import styles from "./GameLogo.module.css";


const GameLogo = () => {


    return (
        <div className={styles.gameLogoContainer}>
            <div className={`${styles.cell} ${styles.playerX}`}>X</div>
            <div className={`${styles.cell} ${styles.playerO}`}>O</div>
            <div className={`${styles.cell} ${styles.playerO}`}>O</div>
            <div className={`${styles.cell} ${styles.playerX}`}>X</div>
        </div>
    )
}


export default GameLogo;