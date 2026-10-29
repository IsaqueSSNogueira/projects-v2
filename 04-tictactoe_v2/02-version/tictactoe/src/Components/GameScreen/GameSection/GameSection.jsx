
import styles from "./GameSection.module.css";
import Board from "./Board/Board";
import GameStatus from "./GameStatus/GameStatus";
import MatchProgress from "./MatchProgress/MatchProgress";


const GameSection = () => {



    return (
        <section className={styles.GameSection}>
            <MatchProgress />
            <Board />
            <GameStatus />
        </section>
    )
}


export default GameSection;