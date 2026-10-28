
import Scoreboard from "./Scoreboard/Scoreboard";
import ResetButton from "./ResetButton/ResetButton";
import styles from "./GameControls.module.css";

const GameControls = () => {


    return (
        <div className={styles.gameControlsContainer}>
            <Scoreboard />
            <ResetButton />
        </div>
    )
}


export default GameControls;