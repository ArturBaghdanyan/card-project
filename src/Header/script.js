// import "./styles.scss";
// import {useEffect, useState} from "react";
// import CardList from "../main/main";
//
// function Header() {
//
//     const [val,setVal] = useState(0);
//     const [count,setCount] = useState(0);
//
//     useEffect(() => {
//         setCount(() => count + 1);
//     }, [val])
//
//     const handle = () => {
//         setVal((c) => c + 1)
//     }
//
//     return (
//         <div className="header">
//             <div className="button-click">
//                 <button onClick={handle}>add card</button>
//                 <button>sorts cards</button>
//
//             </div>
//             {count}
//             {/*{count.map(function(object, i){*/}
//             {/*    return <CardList obj={object} key={i} />;*/}
//             {/*})}*/}
//             <CardList />
//         </div>
//     );
// }
// export default Header;


import {useState} from "react";
import CardList from "../main/main";

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