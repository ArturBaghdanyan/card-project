import {useState} from "react";
import CardList from "../main/main";

function Header() {
    const [click,setClick] = useState([]);

    const handleClick = () => {
        setClick(click.concat(<CardList key={click.length} />))
    };
    return (
        <div className="header">
            <button onClick={handleClick}>add card</button>
            <button>sorts cards</button>

            <CardList />
        </div>
    )
}
export default Header;