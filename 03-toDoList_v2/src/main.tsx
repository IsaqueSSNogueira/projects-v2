

import { StrictMode } from "react"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)



/* padrão tradicional/desatualizado
import React from "react"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "App.tsx"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

*/