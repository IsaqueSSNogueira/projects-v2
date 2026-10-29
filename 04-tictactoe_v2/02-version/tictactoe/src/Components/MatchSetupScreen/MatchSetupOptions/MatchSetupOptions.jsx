
import MatchOptionButton from "./MatchOptionButton/MatchOptionButton";
import MatchSetupInfo from "./MatchSetupInfo/MatchSetupInfo";
import styles from "./MatchSetupOptions.module.css";


const MatchSetupOptions = () => {


    return(
        <div className={styles.matchSetupOptions}>
            <MatchSetupInfo />
            <MatchOptionButton type={1} />
            <MatchOptionButton type={3} />
            <MatchOptionButton type={10} />
        </div>
    )
}


export default MatchSetupOptions;