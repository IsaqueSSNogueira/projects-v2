
import GameScreen from "./Components/GameScreen/GameScreen";
import { useContext } from "react";
import { PlayerContext } from "./Contexts/PlayerContext";
import styles from "./App.module.css"
import StartScreen from "./Components/StartScreen/StartScreen";



const App = () => {


  const {currentScreen} = useContext(PlayerContext);


  return(
      <main className={styles.main}>
        {currentScreen === "Start" && <StartScreen />}
        {currentScreen === "Game" && <GameScreen />}
        {/**/}
      </main>
  )
}


export default App;