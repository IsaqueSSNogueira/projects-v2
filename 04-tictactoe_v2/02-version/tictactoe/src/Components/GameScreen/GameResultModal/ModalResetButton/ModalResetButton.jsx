
import styles from "./ModalResetButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MatchContext } from "../../../../Contexts/MatchContext/MatchContext";




const ModalResetButton = () => {

    const {showWinner, resetGame} = useContext(MatchContext)

    const clickResetButton = () => {
        resetGame()
        showWinner(false)
    }

    return (
        <button className={styles.resetButton} onClick={clickResetButton}>
            <FontAwesomeIcon icon={faXmark} className={styles.closeSymbol} aria-hidden="true" />
            Fechar
        </button>
    )
}


export default ModalResetButton;