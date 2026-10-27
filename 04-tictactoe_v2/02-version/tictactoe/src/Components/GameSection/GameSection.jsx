
import styles from "./GameSection.module.css";
import Board from "./Board/Board";
import GameStatus from "./GameStatus/GameStatus";


const GameSection = () => {



    return (
        <section className={styles.GameSection}>
            <Board />
            <GameStatus />
        </section>
    )
}


export default GameSection;