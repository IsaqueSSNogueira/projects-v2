import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { BrowserRouter } from "react-router"
import { PlayerProvider } from "./Contexts/PlayerProvider.jsx";
import AudioProvider from "./Contexts/AudioContext/AudioProvider.jsx";
import MatchProvider from "./Contexts/MatchContext/MatchProvider.jsx";
import GameProvider from "./Contexts/GameContext/GameProvider.jsx";

import "./index.css"
import App from "./App.jsx"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AudioProvider>
      <MatchProvider>
        <GameProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </GameProvider>
      </MatchProvider>
    </AudioProvider>
  </StrictMode>
)