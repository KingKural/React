import { useRef, useState } from "react";
import "./ShopCartComponent.css"

function ShopCartComponent() {
    const shopRef = useRef();
    const input = useRef();
    const [tasks, setTasks] = useState([]);
    const [SearchResult, setSearchResult] = useState([])
    const [toBuy, setToBuy] = useState([])
    const [myCart, setMyCart] = useState(["5% Discount"])

    function mySins() {
        let newTask = input.current.value;
        tasks.push(newTask);
        setTasks([...tasks]);
        input.current.value = '';
    }

    const repentSinner = i => {
        tasks.splice(i, 1);
        const newList = [...tasks];
        setTasks(newList);
    }

    function whatWeGot() {
        let results = [];
        const shoppingRef = shopRef.current.value;
        for (let item of tasks) {
            if (item.toLowerCase().includes(shoppingRef.toLowerCase())) {
                results.push(item);
            }
        }
        setSearchResult(results);
        if (shoppingRef == "") { setSearchResult([]) }
    }
    function buyThis(i) {
        setToBuy(SearchResult.splice(i, 1));
        setMyCart(toBuy)

    }

    const removeIt = i => {
        myCart.splice(i, 1);
        const newList = [...myCart];
        setMyCart(newList);
    }

    return <>
        <input ref={input} type='text' placeholder="Make Your List" />
        <button onClick={mySins}>Confess Ear</button>
        <br /><span><b>This is Your List!</b></span>

        <ul>
            {tasks.map((task, i) =>
                <li key={i}><b>{task}</b>

                </li>
            )}
        </ul>
        <input onChange={whatWeGot} ref={shopRef} type="text" placeholder="What you Buying?"></input>
        <div className="MyShop">


            <span className="sugestionBox" >{SearchResult.map((item, i) =>
                <div key={i}>
                    {item}
                </div>
            )}</span>

            <span className="ShoppingCart">{myCart.map((item, i) =>
                <div key={i}>
                    {item}
                </div>)}</span><br></br>

        </div>

    </>
}
export default ShopCartComponent