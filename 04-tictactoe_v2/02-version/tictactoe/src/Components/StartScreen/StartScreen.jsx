
import styles from './StartScreen.module.css';
import Header from './../Header/Header';
import GameLogo from './GameLogo/GameLogo';
import WelcomeText from './WelcomeText/WelcomeText';
import FooterText from './FooterText/FooterText';
import StartButton from './StartButton/StartButton';

const StartScreen = () => {

    return(
        <div className={styles.startScreen}>
            <Header isStartScreen={true} />
            <GameLogo />
            <WelcomeText />
            <StartButton />
            <FooterText />
        </div>
    )
}

export default StartScreen;