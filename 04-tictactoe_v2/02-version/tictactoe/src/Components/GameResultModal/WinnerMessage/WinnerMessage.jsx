
import { useContext, useEffect, useState } from "react";
import styles from "./WinnerMessage.module.css";
import { PlayerContext } from "../../../Contexts/PlayerContext";


const WinnerMessage = () => {

    const {winner} = useContext(PlayerContext)

    const [titleMensage, setTitleMensage] = useState("")
    const [hasWinner, setHasWinner] = useState(false)
    const [textMensage, setTextMensage] = useState("")

    useEffect(() => {
        setHasWinner(winner !== "Empate" ? true : false)
    }, [winner])

    useEffect(() => {

        console.log(winner)
        if(hasWinner){
            if(winner === "X"){
                setTitleMensage("O jogador X")
            }
            else if(winner === "O"){
                setTitleMensage("O jogador O")
            }
            setTextMensage("Boa jogada! Você mostrou muita estratégia!")
        }
        else {
            setTitleMensage("Empate")
            setTextMensage("Deu velha! A partida terminou empatada! Jogue denovo :)")
        }

    }, [hasWinner])



    return(
        <div className={styles.winnerMessageContainer}>
            <h3 className={styles.titleWin}>
                {titleMensage}
                <span className={styles.winHighlight}>{hasWinner ? "venceu!" : ""}</span>
            </h3>
            <p className={styles.textWin}>{textMensage}</p>
        </div>

    )
}


export default WinnerMessage;