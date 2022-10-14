import {useState} from "react";
import CardList from "../main/main";
import "./styles.scss";

function Header() {
    const [initialstate,setInitialstate] = useState([]);

    const handleClick = () => {
        setInitialstate([...initialstate,
            <CardList list={randomNumberInRange(100,900)}
                      removeHandler={removeList}
                      sortHandler={func}/>])
    };

    function randomNumberInRange(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function removeList(id) {
        const newList = initialstate.filter((item) => item.id !== id);
        setInitialstate(newList);
    }

    function func() {
        const numDescending = [...initialstate].sort((a, b) => b.id - a.id);
        setInitialstate(numDescending)
    }

    return (
        <div className="header">
                <button onClick={handleClick}>add card</button>
                <button onClick={func}>sorts cards</button>
                {initialstate}
        </div>
    )
}
export default Header;