
import { useContext } from "react";
import { PlayerContext } from "./Contexts/PlayerContext.jsx";
import styles from "./App.module.css"
import GameControls from "./Components/GameControls/GameControls.jsx";
import GameResultModal from "./Components/GameResultModal/GameResultModal.jsx";
import GameSection from "./Components/GameSection/GameSection.jsx";
import Header from "./Components/Header/Header.jsx"



const App = () => {

  const {showGameResultModal} = useContext(PlayerContext)

  return(
    <main className={styles.main}>
      <Header />
      <GameSection />
      <GameControls />
      {showGameResultModal && <GameResultModal />}
    </main>
  )
}


export default App;