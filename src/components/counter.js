import { useEffect, useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(0)
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Times Clicked ${clicked}`;
    });

    const increase = () => { setCount(count + 1); setClicked(clicked + 1) }
    const decrease = () => { setCount(count - 1); setClicked(clicked + 1) }
    const reset = () => { setCount(0); setClicked(clicked + 1) }

    return <>
        <button onClick={increase}><b>+ 1</b></button>
        <button onClick={reset}><b>= 0</b></button>
        <button onClick={decrease}><b>- 1</b></button>

        <br></br><span>{count}</span>
        <br></br><spam> Times Clicked {clicked}</spam>

    </>
}

export default Counter;

