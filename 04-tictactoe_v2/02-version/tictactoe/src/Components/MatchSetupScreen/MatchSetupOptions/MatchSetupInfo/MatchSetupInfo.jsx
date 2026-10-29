
import styles from "./MatchSetupInfo.module.css";
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MatchSetupInfo = () => {


    return(
        <div className={styles.matchSetupInfo}>
            <h3 className={styles.title}>
                <FontAwesomeIcon icon={faTableCellsLarge} />
                Escolha um modo de jogo
            </h3>
            <h4 className={styles.subtitle}>Defina quantas partidas quer jogar e boa sorte!</h4>
        </div>
    )
}

export default MatchSetupInfo;