import { useState, useRef } from "react";



function WordCounterComp() {
    const wordsRef = useRef();
    const searchRef = useRef();
    const [text, setText] = useState("");
    const [wordsToCount, setWordsToCount] = useState("");
    const [wordsCounted, setWordsCounted] = useState("");
    const [charCounted, setCharCounted] = useState([]);
    


    function present() {
        const userText = wordsRef.current.value;
        setText(userText)
        setWordsToCount(wordsRef.current.value)
        setWordsCounted(wordsToCount.split(" "))

        if (userText === "") {
            setWordsCounted("")
        }
        let search = searchRef.current.value
        if (search === "" || userText === "") {
            setCharCounted([])

        }
    }


    function counted() {
        const userText = wordsRef.current.value;
        setWordsCounted(wordsToCount.split(" "))

        if (userText === "") {
            setWordsCounted("")
        }

    }

    function lookFor() {
        let search = searchRef.current.value
        let results = [];
        for (let i of wordsCounted) {
            if (i.toLowerCase().includes(search.toLowerCase())) {
                results.push(i);
            }
            setCharCounted(results)
            if (search === "") {
                setCharCounted([])
    
            }
        }
    }


    return <div>
        <span><b>Enter Your Text Here!</b></span><input ref={wordsRef} type="text" onChange={present}></input><button onClick={counted}>Click to Count Pasted Text</button>
        <p className="Words"><i >{text}</i></p>
        <p><b>There are {wordsCounted.length} Words and {wordsToCount.length} inputs in your Text!</b></p>
        <p><b> Does it Include <input ref={searchRef} type="text" placeholder="Look For"></input> ? <button onClick={lookFor}>Look</button></b></p>
        <p>{charCounted.length} results found!</p>


    </div>

}
export default WordCounterComp