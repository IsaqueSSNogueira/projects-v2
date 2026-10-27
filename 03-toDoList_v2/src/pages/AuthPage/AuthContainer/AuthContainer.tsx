
// components
import SignInArea from "./AuthAreas/SignInArea";
import SignUpArea from "./AuthAreas/SignUpArea";
// styles
import styles from "./AuthContainer.module.css"

const AuthContainer = () => {


    return (
        <main className={styles.main}>
            <SignInArea />
            <SignUpArea />
        </main>

    )
}


export default AuthContainer;