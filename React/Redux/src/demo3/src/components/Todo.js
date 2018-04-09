import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        onClick: PropTypes.func,
        complete: PropTypes.bool,
        text: PropTypes.string
    };

    render() {
        return (
            <li onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.complete ? 'line-through' : 'none',
                    cursor: this.props.completed ? 'default' : 'pointer'
                }}>
                {this.props.text}
            </li>
        );
    }
}