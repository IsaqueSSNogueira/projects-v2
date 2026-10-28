
import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "./../../../../Contexts/PlayerContext";
import winSound from "./../../../../assets/audio/endGame/win/floraphonic-arcade-ui-18-229517.mp3"
import drawSound from "./../../../../assets/audio/endGame/draw/freesound_community-negative_beeps-6008.mp3"
import styles from "./WinnerMessage.module.css";


const WinnerMessage = () => {

    const {winner} = useContext(PlayerContext)

    const [titleMensage, setTitleMensage] = useState("")
    const [hasWinner, setHasWinner] = useState(false)
    const [textMensage, setTextMensage] = useState("")
    const sound = useRef(null)
    

    const playSound = (type) => { 
        
        if(!sound.current) {
            sound.current = new Audio()
        }
        
        sound.current.pause();
        if(type === "win"){
            sound.current.src = winSound;
            sound.current.volume = 1;
        }
        else{
            sound.current.src = drawSound;
            sound.current.volume = 0.4;

        }
        sound.current.load();
        
        sound.current.play().catch((error) => {
            if (error.name !== "AbortError") {
                console.error("Erro ao reproduzir áudio:", error);
            }
        });
    }


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
            playSound("win")
        }
        else {
            setTitleMensage("Empate!")
            setTextMensage("Deu velha! A partida terminou empatada! Jogue denovo :)")
            playSound("draw")
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