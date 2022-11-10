import { useState } from "react";

function MessageMe() {
    const [message, setMessage] = useState(undefined);
    const getSum = "Trollolo"
    return<>
    
    <span> <b>{message}</b></span> <br></br>
    <input type="text" value={message} placeholder="What do You Want?" onChange={(e) => setMessage(e.target.value)}></input>
    </>
}

export default MessageMe