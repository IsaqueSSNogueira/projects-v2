
import PlayerScore from "./PlayerScore/PlayerScore";
import styles from "./Scoreboard.module.css";
import { useContext } from "react";
import { PlayerContext } from "./../../../../Contexts/PlayerContext";


const Scoreboard = () => {

    const {winsX, winsO} = useContext(PlayerContext)


    return(
        <div className={styles.scoreboard}>

        <PlayerScore player={"X"} wins={winsX} />
        <PlayerScore player={"O"} wins={winsO} />


        </div>
    )
}


export default Scoreboard;