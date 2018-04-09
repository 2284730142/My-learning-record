import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

export default class TodoList extends Component {
    static propTypes = {
        onTodoClick: PropTypes.func,
        todos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            completed: PropTypes.bool
        }))
    };

    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo}
                          key={index}
                          onClick={() => this.props.onTodoClick(index)}/>
                )}
            </ul>
        )
    }
}
