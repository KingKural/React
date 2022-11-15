import TableComponents from "../../components/TableComponents"

function TablePage() {
    return <div>
        <h1>Dome of the table!</h1>

        <table><tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>City</th>
        </tr>
        </table>
        <TableComponents />

    </div>

}
export default TablePage