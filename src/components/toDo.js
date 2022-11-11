import { useRef, useState } from "react"

function ToDoIt() {


    const input = useRef();
    const [tasks, setTasks] = useState([]);

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

   

    return <>
        <h1>Look into your <i>Soul</i>! </h1>

        <input ref={input} type='text' placeholder="Confess Your Sins"/>
        <button onClick={mySins}>Confess Ear</button>
        <br /><span><b>Behold Your Sins!</b></span>

        <ul>
            {tasks.map((task, i) =>
                <li key={i}><b>{task}</b>  <button onClick={repentSinner}>Repent</button></li>
            )}
        </ul>
    </>
}

export default ToDoIt