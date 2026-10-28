
import styles from "./GameResultModal.module.css";
import ModalResetButton from "./ModalResetButton/ModalResetButton.jsx";
import SymbolContainer from "./SymbolContainer/SymbolContainer.jsx";
import WinnerMessage from "./WinnerMessage/WinnerMessage.jsx";



const GameResultModal = () => {



    return(
        <div className={styles.gameResultModal}>
            <div className={styles.gameResultContainer}>

                <SymbolContainer />
                <WinnerMessage />
                <ModalResetButton />

            </div>
        </div>
    )
}


export default GameResultModal;