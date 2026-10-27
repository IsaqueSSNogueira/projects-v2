
import { useContext, useRef } from "react";
import { PlayerContext } from "../../../Contexts/PlayerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./ResetButton.module.css";
const ResetButton = () => {

    const { resetGame } = useContext(PlayerContext);

    return (
        <button className={styles.resetButton} onClick={resetGame}>
            <FontAwesomeIcon icon={faRotateRight} className={styles.restartIcon} />
            Reiniciar Partida
        </button>
    )
}


export default ResetButton;