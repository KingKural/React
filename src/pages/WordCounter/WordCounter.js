import { useState, useRef } from "react";
import AbelWordCounter from "../../components/abelwordcounter";
import AbelWordCounterTwo from "../../components/abelwordcountertwo";
import WordCounterComp from "../../components/WordCounterComp";



function WordCounter() {
    return <div>
        <div>
            <h1>Count those Words!</h1>
            <WordCounterComp />
        </div>
        <div>
            <h1>Count those Words!</h1>
            <AbelWordCounter />
        </div>
        <div>
            <h1>Count those Words 2!</h1>
            <AbelWordCounterTwo/>
        </div>
    </div>

}
export default WordCounter