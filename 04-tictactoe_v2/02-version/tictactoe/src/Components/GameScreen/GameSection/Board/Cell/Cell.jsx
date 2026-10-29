
import { useContext, useEffect, useRef, useState } from "react";
import cliskSound from "./../../../../../assets/audio/clickButton/amaze98-clicking-interface-select-201946.mp3"
import styles from "./Cell.module.css";
import { MatchContext } from "../../../../../Contexts/MatchContext/MatchContext";



const Cell = ({ index }) => {

    const { currentPlayer, addPlayerMove, resetKey } = useContext(MatchContext)


    /*status & style*/
    const [cellStatus, setCellStatus] = useState("")
    const cellPosition = {
        row: Math.floor(index / 3) + 1,
        column: (index % 3) + 1,
    }

    /*
    const sound = useRef(null)
    const playSound = () => {
        if(!sound.current){
            sound.current = new Audio()
        }
        sound.current.src = cliskSound;
        sound.current.volume = 0.4;
        sound.current.load();
        sound.current.currentTime = 0;
        sound.current.play()
    }
    */


    /*clear*/
    useEffect(() => {
        setCellStatus("")
    }, [resetKey])

    /*status "X", "O", ""*/
    const cellStyle = {
        X: styles.playerX,
        O: styles.playerO,
    }[cellStatus] ?? "";

    const handleClick = () => {
        if(cellStatus !== "") return
        /*playSound()*/
        setCellStatus(currentPlayer)
        addPlayerMove(index)
        console.log(`Linha ${cellPosition.row}, Coluna ${cellPosition.column}`)
    }

    return (
        <div className={styles.cellArea} data-index={index}>
                <button data-index={index} className={`${styles.cellButton} ${cellStyle}`} onClick={handleClick} aria-label={`Linha ${cellPosition.row}, coluna ${cellPosition.column}, ${cellStatus || "vazia"}`}>
                    {cellStatus}
                </button>
        </div>
    )
}


export default Cell;