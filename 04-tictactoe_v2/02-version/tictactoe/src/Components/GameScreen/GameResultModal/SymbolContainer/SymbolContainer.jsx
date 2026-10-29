
import styles from "./SymbolContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SymbolContainer = () => {

    return(
        <div className={styles.symbolContainer} aria-hidden="true">
            <FontAwesomeIcon icon={faTrophy} className={styles.trophySymbol} />
            <FontAwesomeIcon icon={faStar} className={styles.starSymbol} />
        </div>
    )

}


export default SymbolContainer;