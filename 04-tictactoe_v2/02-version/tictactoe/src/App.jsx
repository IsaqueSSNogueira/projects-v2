
import GameScreen from "./Components/GameScreen/GameScreen";
import styles from "./App.module.css"
import StartScreen from "./Components/StartScreen/StartScreen";
import { Route, Routes } from "react-router";



const App = () => {


  return(
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/game" element={<GameScreen />} />
        </Routes>
        {/**/}
      </main>
  )
}


export default App;