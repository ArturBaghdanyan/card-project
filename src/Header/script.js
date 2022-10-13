import {useState} from "react";
import CardList from "../main/main";
import "./styles.scss"
function Header() {
    const [initialstate,setInitialstate] = useState([]);

    const handleClick = () => {
        setInitialstate([...initialstate, <CardList />])
    };

    return (
        <div className="header">
            <button onClick={handleClick}>add card</button>
            <button>sorts cards</button>
            {initialstate}
        </div>
    )
}
export default Header;