import "./styles.scss";
import {useState, useEffect} from "react";

function CardList(props) {
    const [list,setList] = useState()
    const [count, setCount] = useState([
        {
            data: [0],
            list: [],
            itemName: '',
        }
    ]);

    useEffect(() => {
      setList(list);
    });

    function removeList(id) {
        const newList = count.filter((item) => item.id !== id);
        setCount(newList);
    }

    return (
        <div>

           {
             count.map((todo) => {

               return <div className="square" key={todo.id}>
                       <p>{props.list}</p>
                       <p className="remove" onClick={() => removeList(todo.id)}>X</p>
                    </div>
              })
            }

        </div>
    )
}
export default CardList;