import { useRef, useState } from "react";
import "../components/objectPaginationStyle.css"

function ObjectPagination() {

    const [person, setPerson] = useState([
        { name: "Harold Finch", age: 45, bio: "Made the P.O.I System!", email: "finch@poi.com" },
        { name: "John Reese", age: 34, bio: "P.O.I System Enforcer!", email: "reese@poi.com" },
        { name: "Lionel Fusco", age: 38, bio: "NYPD Officer. 16 years on the force.", email: "fuscolionel@nypd.com" },
        { name: "Samantha Groves", age: 32, bio: "Saved by the P.O.I System!", email: "samgroves32@yahoo.com" },
        { name: "Sameen Shaw", age: 30, bio: "NYPD Officer & P.O.I System Enforcer!", email: "shawsameen@nypd.com" }
    ])

    let [pos, setPos] = useState(0);

    function nextPerson() {
        if (pos < person.length - 1) { setPos(pos + 1) }
        else { setPos(0) }
    }

    function previousPerson() {
        if (pos > 0) { setPos(pos - 1) }
        else { setPos(person.length - 1) }
    }
    function isSelected(i) {
        return i==pos?'selected':'';
    }
    return <>

        <div className="top-menu">
            {person.map((txt, i) =>
                <div onClick={() => setPos(i)} className={isSelected(i)} key={i} > {txt.name} </div>)}
        </div>

        <div className="display-info">

            <button onClick={previousPerson}>Previous</button>
            <div>
                Name: {person[pos].name + " "}
                Age: {person[pos].age} <br />
                Bio: {person[pos].bio} <br />
                Email: {person[pos].email} <br />
            </div>
            <button onClick={nextPerson}> Click Ear</button>

        </div>





    </>
}



export default ObjectPagination