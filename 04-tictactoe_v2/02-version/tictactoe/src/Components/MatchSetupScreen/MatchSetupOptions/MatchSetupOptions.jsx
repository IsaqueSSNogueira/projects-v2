
import MatchOptionButton from "./MatchOptionButton/MatchOptionButton";
import styles from "./MatchSetupOptions.module.css";

const MatchSetupOptions = () => {


    return(
        <div className={styles.matchSetupOptions}>
            <h3>Escolha um modo</h3>
            <MatchOptionButton type={1} />
            <MatchOptionButton type={2} />
            <MatchOptionButton type={3} />
        </div>
    )
}


export default MatchSetupOptions;