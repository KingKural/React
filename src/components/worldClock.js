import { useState, useEffect } from "react";

function WorldClock() {
    const [clock, setClock] = useState("");
    useEffect(() => {
        const myIntv = setInterval(myClock, 1000);
        return () => { clearInterval(myIntv) }
    }, [])

    function myClock() {
        const date = new Date();
        const clocked = date.toLocaleTimeString()
        setClock(clocked);
    }
    return <>
        {clock}

    </>
}

export default WorldClock