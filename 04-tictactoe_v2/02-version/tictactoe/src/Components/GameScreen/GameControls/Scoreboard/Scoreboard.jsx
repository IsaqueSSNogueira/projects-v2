
import PlayerScore from "./PlayerScore/PlayerScore";
import styles from "./Scoreboard.module.css";
import { useContext } from "react";
import { MatchContext } from "../../../../Contexts/MatchContext/MatchContext";


const Scoreboard = () => {

    const {winsX, winsO} = useContext(MatchContext)


    return(
        <div className={styles.scoreboard}>

        <PlayerScore player={"X"} wins={winsX} />
        <PlayerScore player={"O"} wins={winsO} />


        </div>
    )
}


export default Scoreboard;