
// style
import styles from "./AuthForm.module.css";

const AuthForm = ({ type }) => {


    const form = {
        button: type === "signIn" ? "Entrar" : "Registrar",
        text: ""
    }

    switch (type) {
        case "signIn" :
            form.button = "Entrar"
            form.text = ""
    }



    return (
        <form className={styles.form} autoComplete="off">
            <input type="text" className={styles.inputs} placeholder="Usuário" minLength={5} maxLength={30}  />
            <input type="password" className={styles.inputs} placeholder="Senha" minLength={5} maxLength={30}  />
            <button className={styles.authButton}>{type}</button>
        </form>
    )

}

export default AuthForm;