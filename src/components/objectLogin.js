import { useRef, useState } from "react";
import "./objectLogin.css";


function ObjectLogin() {

    const logInfo = [
        { username: "Prince", password: "PurpleRa1n" },
        { username: "Kural", password: "KingKural2891" },
        { username: "Hella", password: "downUnder666" }]

    const userName = useRef();
    const passWord = useRef();
    const [message, setMessage] = useState('');

    function logInto() {
        const usedName = userName.current.value;
        const passWorded = passWord.current.value;

        for (let logedInfo of logInfo) {
            if (logedInfo.username == usedName && logedInfo.password == passWorded) { setMessage('Welcome back ' + usedName + '!');; return }
            else { setMessage("Wrong House Fool!") }
        }
    };

    return <>
        <div className="personLogin">
            <h3>Welcome to the P.O.I System</h3>
            <span>User Name</span>
            <br />
            <input ref={userName} className="UserField" type="text"></input>
            <br />
            <span>Password</span>
            <br />
            <input ref={passWord} className="PassField" type="password"></input>
            <br />
            <button onClick={logInto}>Login</button>
            {message && <div className="alert">{message}</div>}
        </div>



    </>
}



export default ObjectLogin
