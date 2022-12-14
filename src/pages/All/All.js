import { useState } from "react";
import Result from "../../components/result";
function All() {
    const [list, setList] = useState([
        {
            url: 'https://academy.com',
            title: 'This is Academy!',
            summary: 'Academy is a webpage that does this and that and etc. Academy is a webpage that does this and that and etc',
        },
        {
            url: 'https://praia-shopping.com',
            title: 'Cinema na Praia Shopping',
            summary: 'Cinema em Shopping'
        },
        {
            url: 'https://pao-quente.com',
            title: 'Pão Quente',
            summary: 'Pão Quente não tem pão quente, apenas pão frio.'
        },
        {
            url: 'https://somada.com',
            title: 'Somada',
            summary: 'Somada é na fora.'
        }
    ]);

    const removeFromList = i => {
        list.splice(i, 1);
        const newList = [...list];
        setList(newList);
    }

    return <>
        <h1> All page</h1>
            {list.map((item, i) => <Result
            key={i}
            url={item.url}
            title={item.title}
            summary={item.summary}
            remove={() => removeFromList(i)}
        />)}
    </>

}

export default All;