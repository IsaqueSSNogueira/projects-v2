
import styles from "./PlayerScore.module.css";


const PlayerScore = ({ player, wins}) => {

    const value = 1;

    const playerStyle = player === "X" ? styles.playerXScore : styles.playerOScore;


    return(
        <div className={playerStyle}>
            <div className={styles.simbolPlayer}>
               {player}
            </div>
            <div className={styles.playerInfo}>
                <p className={styles.playerLabel}>Jogador <span className={styles.playerName}>{player}</span></p>
                <span className={styles.score}>{wins}</span>
            </div>
        </div>
    )
}


export default PlayerScore;