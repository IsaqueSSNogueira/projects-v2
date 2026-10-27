
import { useContext } from "react";
import styles from "./GameStatus.module.css"
import { PlayerContext } from "../../../Contexts/PlayerContext";


const GameStatus = () => {

    const {currentPlayer} = useContext(PlayerContext)

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