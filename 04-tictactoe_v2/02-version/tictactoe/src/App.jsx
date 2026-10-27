
import styles from "./App.module.css"
import GameControls from "./Components/GameControls/GameControls.jsx";
import GameSection from "./Components/GameSection/GameSection.jsx";
import Header from "./Components/Header/Header.jsx"
import { PlayerProvider } from "./Contexts/PlayerProvider..jsx";


const App = () => {

  return(
    <PlayerProvider>
    <main className={styles.main}>
      <Header />
      <GameSection />
      <GameControls />
    </main>
    </PlayerProvider>
  )
}


export default App;