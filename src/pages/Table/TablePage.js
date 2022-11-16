import { useState, useRef } from "react";
import TableComponents from "../../components/TableComponents"
import WorldClock from "../../components/worldClock";
import "../Table/TablePage.css"

function TablePage() {
    const idRef = useRef();
    const firstRef = useRef();
    const lastRef = useRef();
    const genderRef = useRef();
    const cityRef = useRef();
    const [registered, setRegistered] = useState([
        {
            id: 325658458, first: "Hella", last: "Bad", gender: "All", city: "Hel"
        }
    ]);

    function registrationForm() {
        const id = idRef.current.value;
        const first = firstRef.current.value;
        const last = lastRef.current.value;
        const gender = genderRef.current.value;
        const city = cityRef.current.value;

        if (id === "" || first === "" || last === "" || gender === "" || city === "") { alert("Something is Missing!") }
        else {
            const newRegistration = {
                id: id,
                first: first,
                last: last,
                gender: gender,
                city: city
            }

            registered.push(newRegistration);
            registered.sort((a, b) =>
                a.first.toLowerCase() > b.first.toLowerCase() ? 1 : -1);

            setRegistered([...registered]);
            idRef.current.value = null;
            firstRef.current.value = null;
            lastRef.current.value = null;
            genderRef.current.value = null;
            cityRef.current.value = null;
        }
    }

    function removeApplication(i) {
        registered.splice(i, 1);
        setRegistered([...registered]);}


    return <div>
        <h1>Dome of the table!</h1>
        <h3>Please Register Here to Become a Georgia Domer</h3>
        <h2>Registration closes at 17 Hours! Current Time: <WorldClock/></h2>
        <div className="Registration"><span ><b onClick={registrationForm}>Registration</b></span>
            <input ref={idRef} type="text" placeholder="Identification"></input>
            <input ref={firstRef} type="text" placeholder="First Name"></input>
            <input ref={lastRef} type="text" placeholder="Last Name"></input>
            <input ref={genderRef} type="text" placeholder="Gender"></input>
            <input ref={cityRef} type="text" placeholder="City"></input>
            <input ref={cityRef} type="text" placeholder="Don't Write Here!"></input>
        </div>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th>Judgment</th>
                </tr>
            </thead>
            <tbody>
                {registered.map((item, i) => <TableComponents
                    key={i}
                    id={item.id}
                    first={item.first}
                    last={item.last}
                    gender={item.gender}
                    city={item.city}
                    unfit={() => removeApplication(i)}
                />)}
            </tbody>

        </table>

    </div>

}
export default TablePage;