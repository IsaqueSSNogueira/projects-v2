

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCopy } from "@fortawesome/free-regular-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { PlayerContext } from "../../../../Contexts/PlayerContext";
import styles from "./MatchOptionButton.module.css";



const MatchOptionButton = ({ type }) => {

    const {playSoundFunction, selectMatchCount} = useContext(PlayerContext);



    const [styleButton, setStyleButton] = useState(null)
    const [icon, setIcon] = useState(null)
    const [title, setTitle] = useState(null)
    const [subtitle, setSubtitle] = useState(null)

    const onClick = () => {
        selectMatchCount(type)
        playSoundFunction("start")
    }

    useEffect(() => {
        switch(type){
            case 1:
                setStyleButton(styles.singleMatch);
                setIcon(faUser);
                setTitle("1 partida");
                setSubtitle("Uma rodada rápida");
                break;
            case 3:
                setStyleButton(styles.bestOfThree);
                setIcon(faCopy);
                setTitle("3 partidas");
                setSubtitle("Melhor de 3");
                break;
            case 10:
                setStyleButton(styles.bestOfTen);
                setIcon(faTrophy);
                setTitle("10 partidas");
                setSubtitle("Desafio completo");
                break;
        }    
    }, [])
   

    return(
        <Link to="/game" className={`${styles.matchOptionButton} ${styleButton}`} onClick={onClick}>
            <div className={styles.buttonIconContainer}>
                <FontAwesomeIcon icon={icon} className={styles.buttonIcon} />
            </div>

            <div className={styles.optionInfo}>
                <h4 className={styles.optionTitle}>{title}</h4>
                <p className={styles.optionSubtitle}>{subtitle}</p>
            </div>
            <FontAwesomeIcon icon={faAngleRight} className={styles.arrowIcon} />
        </Link>

    )
}


export default MatchOptionButton;