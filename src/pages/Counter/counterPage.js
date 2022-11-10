import Counter from "../../components/counter"
import MessageMe from "../../components/Message"
import CalculateMe from "../../components/calculator";

function CounterPage() {


    return <>

        <h1> Counter page</h1>
               <Counter />
        <h1> Get Sum!</h1>
                <MessageMe />
        <h1> Calculate Me!</h1>
                <CalculateMe />
    
    
    </>

}

export default CounterPage;