
import { useRef, useState } from "react";
import "./TableComponents.css"

function TableComponents(props) {

    return <tr>
        <td>{props.id}</td>
        <td>{props.first}</td>
        <td>{props.last}</td>
        <td>{props.gender}</td>
        <td>{props.city}</td>
        <td><button onClick={props.unfit}><b>Unfit for Dome</b></button></td>
    </tr>
}

export default TableComponents