import { useRef, useState } from "react";

function WriteItDown() {

    const input = useRef();
    const [text, setText] = useState("");

    function present() {
        const userText = input.current.value;
        setText(userText)

        input.current.value = "";
        
    }

    return <>
        <input ref={input} type='text' />
        <button onClick={present}>Click Ear</button> <b>{text}</b>

    </>
}

export default WriteItDown