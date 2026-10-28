import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { BrowserRouter } from "react-router"
import { PlayerProvider } from "./Contexts/PlayerProvider..jsx";

import "./index.css"
import App from "./App.jsx"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlayerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PlayerProvider>
  </StrictMode>
)