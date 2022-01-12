import { useState } from "react";
import styles from "./Login.module.scss"
import { useNavigate } from "react-router-dom"; //sostituisce useHistory in  react-router-dom v6

const Login = (props) => {

    let navigate = useNavigate();

    const [ userName, setUserName] = useState("");
    const [ userPass, setUserPass] = useState("");

    const handleSendBtn = (event) => {
        event.preventDefault();
        props.setSiteName(userName);

        alert("Login effettuato!"); //da sostituire con una modale
        // window.location.href = "/social-app"; redirect "esterno", non preserva il nome
        navigate('/social-app'); //redirect alla home page dell'app con routing interno
    };

    return (
        <form className={styles.Login}>
            <input 
                value={userName}
                onChange={(e) => setUserName(e.target.value)} 
                name="username" 
                id="username" 
                type="text" 
                placeholder="Username" 
                required
            />
            <input
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                required 
            />
            <button type="submit" onClick={handleSendBtn}>Login</button>
        </form>
    );
};

export default Login;