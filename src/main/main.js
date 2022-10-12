
import "./styles.scss";
import {useState,useEffect} from "react";


function CardList() {

    const [list, setList] = useState([]);

    // const { transactionData } = props;
    //
    // useEffect(() => {
    //     setList(transactionData)
    // }, [transactionData]);


    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        setList(randomNumberInRange(2,50));
    };


    function removeList(id) {
        const newList = list.filter((item) => item.id !== id);
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

            <button onClick={handleClick}></button>

        </div>
    )
}
export default CardList;