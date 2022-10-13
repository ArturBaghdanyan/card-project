import {useState} from "react";
import CardList from "../main/main";
import "./styles.scss"
function Header() {
    const [initialstate,setInitialstate] = useState([]);
    const [list,setList] = useState(0)


    const handleClick = () => {
        setInitialstate([...initialstate, <CardList list={randomNumberInRange(2, 20)}/>])
    };

    function randomNumberInRange(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const handleClear = () => {
        setList(randomNumberInRange(2,100));

        setInitialstate(initialstate.map(item => item.props.list).sort((a, b) => a -b));
        // console.log(initialstate.map(item => item.props.list).sort((a, b) => a -b))
    };



    return (
        <div className="header">
                <button onClick={() => handleClick()}>add card</button>
                <button onClick={handleClear}>sorts cards </button>
                {initialstate}
        </div>
    )
}
export default Header;