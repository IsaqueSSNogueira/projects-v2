
import styles from "./AuthAreas.module.css"
import AuthForm from "./AuthForm/AuthForm";

const SignInArea = () => {




    return (

        <div className={styles.authAreas}>
            <h2 className={styles.title}>Login</h2>
            <AuthForm type="signIn" />
        </div>
    )
}

export default SignInArea;