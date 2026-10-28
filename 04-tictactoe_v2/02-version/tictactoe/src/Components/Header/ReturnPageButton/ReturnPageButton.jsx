
import styles from "./ReturnPageButton.module.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

const ReturnPageButton = () => {

    return(
        <Link to="/" className={styles.link}>
                <FontAwesomeIcon icon={faArrowLeft} className={styles.returnIcon} />
        </Link>
    )
}


export default ReturnPageButton;