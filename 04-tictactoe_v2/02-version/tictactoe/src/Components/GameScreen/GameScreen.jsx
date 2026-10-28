
import { useContext } from "react";
import { PlayerContext } from "./../../Contexts/PlayerContext.jsx"
import GameControls from "./GameControls/GameControls.jsx";
import GameResultModal from "./GameResultModal/GameResultModal.jsx";
import GameSection from "./GameSection/GameSection.jsx";
import Header from "./../Header/Header.jsx";
import styles from "./GameScreen.module.css";

const GameScreen = () => {

    const {showGameResultModal} = useContext(PlayerContext);

    return(
        <div className={styles.GameScreen}>
            <Header />
            <GameSection />
            <GameControls />
            {showGameResultModal && <GameResultModal />}
        </div>
    )
}


export default GameScreen;