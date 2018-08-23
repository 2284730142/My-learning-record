import React from 'react';
import * as CounterAction from "../actions/CounterAction";

export default class CounterConponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({num: this.props.num});
                    this.props.add()
                }}>+1
                </button>
                <input type="number" value={this.props.num} onChange={(e) => {
                    this.setState({num: e.target.value});
                    this.props.mod(parseInt(e.target.value));
                }}/>
                <button onClick={(e) => {
                    this.setState({num: this.props.num});
                    this.props.del()
                }}>-1
                </button>
            </div>
        )
    }
}