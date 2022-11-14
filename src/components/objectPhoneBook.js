import { useRef, useState } from "react";


function PhoneBook() {

    const [phoneBook, setPhoneBook] = useState([""]);
    const contact = useRef();
    const phoneNumber = useRef();
    
    function addNumber() {

       
    }

    return <>
        <div className="phoneBook">
            <h3>Welcome to the P.O.I PhoneBook</h3>
            <span>Name</span>
            <br />
            <input ref={contact} className="NameField" type="text"></input>
            <br />
            <span>Phone Number</span>
            <br />
            <input ref={phoneNumber} className="NumberField" type="number"></input>
            <br />
            <button >Add</button>

            <div className="side-Menu">


            </div>
        </div>



    </>
}
export default PhoneBook