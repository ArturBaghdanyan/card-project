import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
            data: [0],
            list: [],
            itemName: '',
        };
    }
    handleChange = (event) => {
        this.setState({ itemName: event.target.value });
    };
    delete = (index) => {
        this.state.list.splice(index, 1);
        this.setState({ list: this.state.list });
        console.log(index);
    };
    add = () => {
        const list = [...this.state.list];
        list.push(this.state.itemName);
        this.setState({ list: list });
        this.setState({ itemName: '' });
    };
    render() {
        const renderData = () => {
            return this.state.list.map((item, index) => {
                return (
                    <div key={item}>
                        <div className="aa">
                            {index}
                            <button onClick={() => this.delete(index)}>x</button>
                        </div>
                    </div>
                );
            });
        };
        return (
            <div>
                <button onClick={this.add}>Click to add</button>
                <p onClick={this.add}>Add</p>
                {renderData()}
            </div>
        );
    }
}
render(<App />, document.getElementById('root'));