import { useRef, useState } from "react";
import "./ShopCartComponent.css"

function ShopCartComponent() {
    const shopRef = useRef();
    const listRef = useRef();
    const [tasks, setTasks] = useState([]);
    const [SearchResult, setSearchResult] = useState([])
    const [toBuy, setToBuy] = useState([])
    const [myCart, setMyCart] = useState([])

    function myShopList() {
        let newTask = listRef.current.value;
        tasks.push(newTask);
        setTasks([...tasks]);
        listRef.current.value = '';
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

    function repentSinner (i) {
        tasks.splice(i, 1);
        const newList = [...tasks];
        setTasks(newList);
    }


    return <>
        <input ref={listRef} type='text' placeholder="Make Your List" />
        <button onClick={myShopList}>Click Ear</button>
        <br /><span><b>This is Your List!</b></span>

        <ul>
            {tasks.map((task, i) =>
                <li key={i}>
                    {task} <button onClick={repentSinner}>TakeOut</button>

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