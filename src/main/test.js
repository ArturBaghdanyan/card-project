// import React, {useState} from 'react';
// import { render } from 'react-dom';
// import './style.css';
//  function ArrayList() {
//      const arr = {
//          name: 'React',
//          data: [0],
//          list: [],
//          itemName: '',
//      }
//     const [state,setState] = useState([{name: 'React',
//         data: [0],
//         list: [],
//         itemName: '',}]);
//
//
//     const handleChange = (event) => {
//         setState(state[0].itemName );
//     };
//     const deleteCard = (index) => {
//         state.list.splice(index, 1);
//         setState({ list: state.list });
//         console.log(index);
//     };
//     const add = () => {
//         const list = [...state.list];
//         list.push(state.itemName);
//         setState({ list: list });
//         setState({ itemName: '' });
//     };
//
//         const renderData = () => {
//             return state.list.map((item, index) => {
//                 return (
//                     <div key={item}>
//                         <div className="aa">
//                             {index}
//                             <button onClick={() => deleteCard(index)}>x</button>
//                         </div>
//                     </div>
//                 );
//             });
//
//         return (
//             <div>
//                 <button onClick={this.add}>Click to add</button>
//                 <p onClick={this.add}>Add</p>
//                 {renderData()}
//             </div>
//         );
//     }
// }
// render(<ArrayList />, document.getElementById('root'));