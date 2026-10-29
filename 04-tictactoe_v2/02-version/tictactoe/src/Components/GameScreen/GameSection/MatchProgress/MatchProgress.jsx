

import { useContext, useEffect, useState } from "react";
import styles from "./MatchProgress.module.css";
import { PlayerContext } from "../../../../Contexts/PlayerContext";


const MatchProgress = () => {


    const {currentMatch, totalMatches} = useContext(PlayerContext)
    const [matchProgressText, setMatchProgressText] = useState("")

    useEffect(() => {
        setMatchProgressText(totalMatches === 1 ? "Rodada rápida" : `Partida ${currentMatch} de ${totalMatches}`)
    }, [totalMatches, currentMatch])


    return(
        <h3 className={styles.matchProgress}>{matchProgressText}</h3>
    )
}


export default MatchProgress;