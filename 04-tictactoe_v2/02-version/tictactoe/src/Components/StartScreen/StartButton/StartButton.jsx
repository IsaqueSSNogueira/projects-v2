
import styles from "./StartButton.module.css"
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { PlayerContext } from "../../../Contexts/PlayerContext";

const StartButton = () => {

    const {setCurrentScreen} = useContext(PlayerContext);

    const startGameFunction = () => {
        setCurrentScreen("Game")
    }


    return (
        <button className={styles.startButton} onClick={startGameFunction}>
            <FontAwesomeIcon icon={faPlay} className={styles.playIcon} />
            Iniciar
        </button>
    )
}


export default StartButton;