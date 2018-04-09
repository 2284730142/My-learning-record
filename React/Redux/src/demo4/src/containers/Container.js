import React, {Component} from 'react';
import App from './App';

export default class Container extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <App/>
            </div>
        )
    }
}
