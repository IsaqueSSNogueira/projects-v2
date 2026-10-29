
import styles from "./StartButton.module.css"
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { PlayerContext } from "../../../Contexts/PlayerContext";
import { Link } from "react-router";

const StartButton = () => {

    const {playSoundFunction} = useContext(PlayerContext);


    return (
            <Link to="/matchSetup" className={styles.startButton} onClick={() => playSoundFunction("")}>

                <FontAwesomeIcon icon={faPlay} className={styles.playIcon} />
                Iniciar
            </Link>
    )
}


export default StartButton;