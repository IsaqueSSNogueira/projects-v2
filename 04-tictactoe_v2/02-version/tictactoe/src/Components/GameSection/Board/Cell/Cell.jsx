
import { useContext, useEffect, useState } from "react";
import styles from "./Cell.module.css";
import { PlayerContext } from "../../../../Contexts/PlayerContext";



const Cell = ({ index }) => {

    const { currentPlayer, addPlayerMove, resetKey } = useContext(PlayerContext)

    /*status & style*/
    const [cellStatus, setCellStatus] = useState("")
    const [cellStyle, setCellStyle] = useState("")


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