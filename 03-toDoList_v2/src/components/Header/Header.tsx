
import styles from "./Header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

const Header = () => {

    return (
        <header className={styles.header}>

            <div className={styles.containerIcon}>
                <FontAwesomeIcon icon={faClipboard} className={styles.clipboardIcon} />
            </div>

            <h1 className={styles.title}>To do <span>List</span></h1>

        </header>
    )
}


export default Header;