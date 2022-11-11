import { useState } from "react";

function HelloWorld() {
    const [hello, setHello] = useState("Hello, World!");

    return <>

        <h4>{hello}</h4>

    </>
}

export default HelloWorld