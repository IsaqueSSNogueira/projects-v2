
import { useContext } from "react";
import styles from "./GameStatus.module.css"
import { MatchContext } from "../../../../Contexts/MatchContext/MatchContext";


const GameStatus = () => {

    const {currentPlayer} = useContext(MatchContext)

    return (
        <div className={styles.gameStatus}>
            <span className={styles.icon}></span>
            <p className={styles.statusText}>
                Vez do jogador
                <span className={styles.playerStatus}>{currentPlayer}</span>
            </p>
        </div>
    )
}


export default GameStatus;