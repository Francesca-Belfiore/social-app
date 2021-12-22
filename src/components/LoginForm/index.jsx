import { useState } from "react";
import styles from "./LoginForm.module.scss"

const LoginForm = (props) => {
    // eslint-disable-next-line 
    const [ userName, setUserName] = useState("");
    const [ userPass, setUserPass] = useState("");

    // const [ loginData, setLoginData ] = useState({});

    const handleSendBtn = (event) => {
        alert("Login effettuato!");
        event.preventDefault();
        window.location.href = "/social-app";
    };

    // useEffect(() => {
    //     setLoginData({
    //         username: userName,
    //         password: userPass,
    //     });
    // }, [userName, userPass]);

    return (
        <div className={styles.Login}>
            <form>
                <input 
                    value={userName}
                    onChange={(e) => props.setUserName(e.target.value)} 
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
                <button type="submit" onClick={handleSendBtn}>ADD</button>
            </form>
        </div>
    );
};

export default LoginForm;