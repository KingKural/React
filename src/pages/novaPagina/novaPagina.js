import HelloWorld from "../../components/helloWorld";
import HelloWorld2 from "../../components/helloWorld2";
import Pagination from "../../components/pagination";
import WriteItDown from "../../components/writeItDown";

function NovaPagina() {
    return <>
    <h1>It's a New Page, Yes it Is!</h1>
        <HelloWorld text="hello"/>
        <WriteItDown />
        <HelloWorld2 />
        <Pagination />
    </>

}

export default NovaPagina;