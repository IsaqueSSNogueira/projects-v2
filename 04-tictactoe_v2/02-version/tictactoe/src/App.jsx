
import GameScreen from "./Components/GameScreen/GameScreen";
import styles from "./App.module.css"
import StartScreen from "./Components/StartScreen/StartScreen";
import MatchSetupScreen from "./Components/MatchSetupScreen/MatchSetupScreen"
import { Route, Routes } from "react-router";



const App = () => {


  return(
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/matchSetup" element={<MatchSetupScreen />} />
        </Routes>
        {/**/}
      </main>
  )
}


export default App;