
import styles from "./StartButton.module.css"
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { PlayerContext } from "../../../Contexts/PlayerContext";
import { Link } from "react-router";

const StartButton = () => {

    const {setCurrentScreen} = useContext(PlayerContext);

    const startGameFunction = () => {
        setCurrentScreen("Game")
    }


    return (
            <Link to="/Game" className={styles.startButton} onClick={startGameFunction}>

                <FontAwesomeIcon icon={faPlay} className={styles.playIcon} />
                Iniciar
            </Link>
    )
}


export default StartButton;