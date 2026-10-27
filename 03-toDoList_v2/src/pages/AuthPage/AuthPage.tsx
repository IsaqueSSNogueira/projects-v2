
// components
import Header from "./../../components/Header/Header.tsx"
import AuthContainer from "./AuthContainer/AuthContainer.tsx";
// style
import styles from "./AuthPages.module.css"


const AuthPage = () => {


    return (
        <div className={styles.appContainer}>
            
            <Header />
            <AuthContainer />
        </div>
    )
}


export default AuthPage;