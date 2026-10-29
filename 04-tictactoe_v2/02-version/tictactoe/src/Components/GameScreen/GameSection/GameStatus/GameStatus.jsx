
import { useContext } from "react";
import styles from "./GameStatus.module.css"
import { MatchContext } from "../../../../Contexts/MatchContext/MatchContext";


const GameStatus = () => {

    const {currentPlayer} = useContext(MatchContext)

    return (
        <div className={styles.gameStatus}>
            <span className={styles.icon} aria-hidden="true"></span>
            <p className={styles.statusText} aria-live="polite">
                Vez do jogador
                <span className={styles.playerStatus}>{currentPlayer}</span>
            </p>
        </div>
    )
}


export default GameStatus;