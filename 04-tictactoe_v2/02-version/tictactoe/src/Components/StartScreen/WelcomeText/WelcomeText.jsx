
import styles from "./WelcomeText.module.css";


const WelcomeText = () => {


    return(
        <div className={styles.welcomeTextContainer}>
            <h3 className={styles.h3}>
                Prepare-se para o desafio!
            </h3>
            <h4 className={styles.h4}>
                Antecipe as jogadas, bloqueie seu adversário e feche o jogo!
            </h4>
        </div>
    )
}

export default WelcomeText;