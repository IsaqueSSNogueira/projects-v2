
import { useState } from "react";
import Button from "./Button.tsx"
import "./App.css"

const App = () => {

  const [number, setNumber] = useState(0)

  const functionButton = () => {setNumber(number + 1)}

  return (
    <Button onClick={functionButton} value={number} />
  )
}

export default App;