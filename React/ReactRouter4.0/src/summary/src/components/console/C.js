import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class C extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        console.log(React);
        console.log(ReactDOM);
        console.log(PropTypes);
        return (
            <div>ccc</div>
        )
    }
}