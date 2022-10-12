import "./styles.scss";
import {useState} from "react";

function CardList() {
    const [list,setList] = useState([
        {id: 1, number: 74},
        {id: 2, number: 48},
        {id: 3, number: 65},
        {id: 4, number: 27},
    ])

    function removeList(id) {
        const newList = list.filter((i) => i.id !== id);
        setList(newList);
    }
    return (
        <div className="container">

            <ul>
                {
                    list.map((todo) => {
                    return <li key={todo.id}>{todo.number}
                    <span onClick={() => removeList(todo.id)}>x</span></li>
                    })
                }
            </ul>
        </div>
    )
}
export default CardList;