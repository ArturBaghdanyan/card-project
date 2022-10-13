import "./styles.scss";
import {useState, useEffect} from "react";

function CardList() {
    const [list,setList] = useState(Math.random())
    const [count, setCount] = useState([
        {
            data: [0],
            list: [],
            itemName: '',
        }
    ]);

    useEffect(() => {
      setList(list)
    });

    function removeList(id) {
        const newList = count.filter((item) => item.id !== id);
        setCount(newList);
    }

    return (

        <div className="h">
            <div>
                {
                    count.map((todo) => {
                        return <div className="square" key={todo.id}>
                            <p>{list}</p>
                            <p className="remove" onClick={() => removeList(todo.id)}>
                                   X
                            </p>

                        </div>

                    })
                }
                </div>
        </div>
    )
}
export default CardList;