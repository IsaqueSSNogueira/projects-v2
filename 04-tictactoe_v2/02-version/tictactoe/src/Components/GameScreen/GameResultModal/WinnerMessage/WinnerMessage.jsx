
import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "./../../../../Contexts/PlayerContext";
import styles from "./WinnerMessage.module.css";


const WinnerMessage = () => {

    const {winner, playSoundFunction} = useContext(PlayerContext)

    const [titleMensage, setTitleMensage] = useState("")
    const [hasWinner, setHasWinner] = useState(false)
    const [textMensage, setTextMensage] = useState("")

    useEffect(() => {
        setHasWinner(winner !== "Empate" ? true : false)
    }, [winner])

    useEffect(() => {

        if(hasWinner){
            if(winner === "X"){
                setTitleMensage("O jogador X")
            }
            else if(winner === "O"){
                setTitleMensage("O jogador O")
            }
            setTextMensage("Boa jogada! Você mostrou muita estratégia!")
            playSoundFunction("win")
        }
        else {
            setTitleMensage("Empate!")
            setTextMensage("Deu velha! A partida terminou empatada! Jogue denovo :)")
            playSoundFunction("draw")
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