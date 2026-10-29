
import styles from "./StartButton.module.css"
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AudioContext } from "../../../Contexts/AudioContext/AudioContext";
import { Link } from "react-router";

const StartButton = () => {

    const {playSoundFunction} = useContext(AudioContext);


    return (
            <Link to="/matchSetup" className={styles.startButton} onClick={() => playSoundFunction("")}>
                <FontAwesomeIcon icon={faPlay} className={styles.playIcon} aria-hidden="true" />
                Iniciar
            </Link>
    )
}


export default StartButton;