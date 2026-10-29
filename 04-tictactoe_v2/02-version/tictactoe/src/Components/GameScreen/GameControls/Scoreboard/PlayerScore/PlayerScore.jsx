
import styles from "./PlayerScore.module.css";


const PlayerScore = ({ player, wins}) => {


    const playerStyle = player === "X" ? styles.playerXScore : styles.playerOScore;


    return(
        <div className={playerStyle} aria-live="polite">
            <span className={styles.forScreenReaders}>{`Jogador ${player}: ${wins} vitórias`}</span>
            <div className={styles.simbolPlayer} arial-hidden="true">
               {player}
            </div>
            <div className={styles.playerInfo} aria-hidden="true">
                <p className={styles.playerLabel}>Jogador <span className={styles.playerName}>{player}</span></p>
                <span className={styles.score}>{wins}</span>
            </div>
        </div>
    )
}


export default PlayerScore;