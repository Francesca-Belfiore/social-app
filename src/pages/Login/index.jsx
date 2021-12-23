import { useState, useEffect } from "react";
import styles from "./Login.module.scss"

const Login = (props) => {
    const handleSendBtn = (event) => {
        event.preventDefault();
        setLoginData({
            userName,
            userPass
        });
        alert("Login effettuato!");
        window.location.href = "/social-app";
    };
    
    const [ userName, setUserName] = useState("");
    const [ userPass, setUserPass] = useState("");
    const [ loginData, setLoginData ] = useState({});

    useEffect(() => {
        userName && console.log(loginData.userName);
    }, [userName, loginData]);

    return (
        <form className={styles.Login} onSubmit={() => props.setSiteName(loginData.userName)}>
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