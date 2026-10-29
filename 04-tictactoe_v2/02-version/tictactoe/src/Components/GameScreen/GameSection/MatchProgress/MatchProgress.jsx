

import { useContext, useEffect, useState } from "react";
import styles from "./MatchProgress.module.css";
import { MatchContext } from "../../../../Contexts/MatchContext/MatchContext";


const MatchProgress = () => {


    const {currentMatch, totalMatches} = useContext(MatchContext)
    const [matchProgressText, setMatchProgressText] = useState("")

    useEffect(() => {
        setMatchProgressText(totalMatches === 1 ? "Rodada rápida" : `Partida ${currentMatch} de ${totalMatches}`)
    }, [totalMatches, currentMatch])


    return(
        <h3 className={styles.matchProgress}>{matchProgressText}</h3>
    )
}


export default MatchProgress;