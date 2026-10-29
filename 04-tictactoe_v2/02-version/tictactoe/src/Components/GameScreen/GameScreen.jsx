
import { useContext } from "react";
import { MatchContext } from "../../Contexts/MatchContext/MatchContext.jsx";
import GameControls from "./GameControls/GameControls.jsx";
import GameResultModal from "./GameResultModal/GameResultModal.jsx";
import GameSection from "./GameSection/GameSection.jsx";
import Header from "./../Header/Header.jsx";
import styles from "./GameScreen.module.css";

const GameScreen = () => {

    const {showGameResultModal} = useContext(MatchContext);

    return(
        <div className={styles.GameScreen}>
            <Header to={"/matchSetup"} />
            <GameSection />
            <GameControls />
            {showGameResultModal && <GameResultModal />}
        </div>
    )
}


export default GameScreen;