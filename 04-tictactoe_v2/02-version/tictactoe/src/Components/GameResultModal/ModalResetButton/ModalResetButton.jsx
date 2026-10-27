
import styles from "./ModalResetButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PlayerContext } from "../../../Contexts/PlayerContext";




const ModalResetButton = () => {

    const {showWinner, resetGame} = useContext(PlayerContext)

    const clickResetButton = () => {
        resetGame()
        showWinner(false)
    }

    return (
        <button className={styles.resetButton} onClick={() => clickResetButton()}>
            <FontAwesomeIcon icon={faXmark} className={styles.closeSymbol}/>
            Fechar
        </button>
    )
}


export default ModalResetButton;