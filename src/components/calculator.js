import { useState } from "react"

function CalculateMe () {
    const [numba1,setNumba1] = useState(0)
    const [numba2,setNumba2] = useState(0)
    const [symbol, setSymbol] = useState("+")
    const [results, setResults] = useState(0)

    function calculadora(){
        let total;
        if(symbol == "+"){
            total = parseFloat(numba1) + parseFloat(numba2)

        } else if(symbol == "-"){
            total = parseFloat(numba1) - parseFloat(numba2)

        }else if(symbol == "x") {
            total = parseFloat(numba1) * parseFloat(numba2)

        }else {
            total = parseFloat(numba1) / parseFloat(numba2)
        }
        setResults(total);
    }
   

    
    return <>
    <label>First Number</label>
        <input type="number" value={numba1} onChange={(e) => setNumba1(e.target.value)}/>
        <label>Second Number</label>
        <input type="number" value={numba2} onChange={(e) => setNumba2(e.target.value)}/>

        <select value={symbol} onChange={(e) => setSymbol(e.target.value)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="/">÷</option>
        </select>

        <button onClick={()=> calculadora()}>=</button>

        <label>{results}</label>

    </>
}

export default CalculateMe