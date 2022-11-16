import { useRef, useState } from "react";


export default function AbelWordCounter() {

    const [numChars, setNumChars] = useState(0);
    const [numWords, setNumWords] = useState(0);
    const [words, setWords] = useState(0);
    const [check, SetCheck] = useState("")
    const searchRef = useRef();
    

    function counter(event) {
        const text = event.target.value;

        const numberOfChars = text.length;
        const numberOfWords = text.split(' ').length;

        setNumChars(numberOfChars);
        setNumWords(numberOfWords);
        SetCheck(text.split(' '))
        if (text == "") {setNumWords(0)}

    }
    function worded() {
        let searched = check.filter(word => word.toLowerCase() == searchRef.current.value.toLowerCase());
        setWords(searched.length)

    }
    return <>
        <textarea style={{ width: 300, height: 100 }}
            onChange={counter}></textarea><br />

        <span>Number of characters: {numChars}</span><br />
        <span>Number of words: {numWords}</span><br />
        <span><input  ref={searchRef} type="text"></input> {words}</span> <button onClick={worded} >click me</button>
    </>

}
