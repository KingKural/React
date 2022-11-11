import { useRef, useState } from "react";

function Pagination() {
    const alphabetical= [a, b, c, d, e, f]
    const [text, SetText] = useState(alphabetical[0]);
    
    function forward() { }
    
    function backward() { }

    return <>
        <br />
        <button onClick={backward}>Back Up Ear</button>
        <b></b>
        <button onClick={forward}>Click Next Ear</button>

    </>
}

export default Pagination