
import styles from "./ReturnPageButton.module.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

const ReturnPageButton = ({ to }) => {

    return(
        <Link to={to} className={styles.link} aria-label="Return to the previous screen">
                <FontAwesomeIcon icon={faArrowLeft} className={styles.returnIcon} aria-hidden="true" />
        </Link>
    )
}


export default ReturnPageButton;