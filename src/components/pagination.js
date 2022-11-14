import { useRef, useState } from "react";

function Pagination() {
    const alphabetical = ["A", "B", "C", "D", "E", "F"]
    const [texto, setText] = useState(alphabetical[0]);
    let [position, setPosition] = useState(0);

    function forward() {
        if (position < alphabetical.length - 1) {
            const goForward = position + 1;
            setPosition(goForward);
            setText(alphabetical[goForward])
            
        };
        if (position == alphabetical.length - 1) {alert("I'm sorry Bill! I'm Afraid i can't do that!")}
    }

    function backward() {
        if (position > 0) {
            const goBackward = position - 1;
            setPosition(goBackward);
            setText(alphabetical[goBackward])
            
        };

        if (position == 0) {alert("I'm sorry Bill! I'm Afraid i can't do that!")}

    }

    return <>
        <br />
        <button onClick={backward}>Back Up Ear</button>
        <b>{texto}</b>
        <button onClick={forward}>Click Next Ear</button>

    </>
}



export default Pagination