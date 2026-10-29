

import FooterText from "../FooterText/FooterText";
import Header from "./../Header/Header";
import MatchSetupOptions from "./MatchSetupOptions/MatchSetupOptions";
import styles from "./MatchSetupScreen.module.css";


const MatchSetupScreen = () => {


    return (
        <div className={styles.matchSetupScreen}>
            <Header to={"/"} />
            <MatchSetupOptions />
            <div className={styles.footerText}>
                <FooterText />
            </div>
        </div>
    )
}


export default MatchSetupScreen;