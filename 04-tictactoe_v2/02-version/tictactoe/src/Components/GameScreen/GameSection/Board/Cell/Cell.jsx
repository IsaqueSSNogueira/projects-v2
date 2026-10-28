
import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "./../../../../../Contexts/PlayerContext";
import cliskSound from "./../../../../../assets/audio/clickButton/amaze98-clicking-interface-select-201946.mp3"
import styles from "./Cell.module.css";



const Cell = ({ index }) => {

    const { currentPlayer, addPlayerMove, resetKey } = useContext(PlayerContext)


    /*status & style*/
    const [cellStatus, setCellStatus] = useState("")
    const [cellStyle, setCellStyle] = useState("")

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
    useEffect(() => {
        switch(cellStatus){
            case "X":
            setCellStyle(styles.playerX)
            break;
            case "O":
            setCellStyle(styles.playerO)
            break;
            default:
            setCellStyle("")
        }
    }, [cellStatus])

    const handleClick = () => {
        if(cellStatus !== "") return
        /*playSound()*/
        setCellStatus(currentPlayer)
        addPlayerMove(index)
    }

    return (
        <div className={styles.cellArea} data-index={index}>
                <button data-index={index} className={`${styles.cellButton} ${cellStyle}`} onClick={handleClick}>
                    {cellStatus}
                </button>
        </div>
    )
}


export default Cell;