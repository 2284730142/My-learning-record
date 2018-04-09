import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        visibleTodos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            completed: PropTypes.bool
        })),
        visibilityFilter: PropTypes.oneOf([
            'SHOW_ALL',
            'SHOW_COMPLETED',
            'SHOW_ACTIVE'
        ])
    };

    render() {
        console.log(this.props);
        const {dispatch, visibleTodos, visibilityFilter} = this.props;
        return (
            <div>
                <AddTodo onAddClick={text => dispatch(Actions.addTodo(text))}/>
                <TodoList todos={visibleTodos}
                          onTodoClick={index => dispatch(Actions.completeTodo(index))}/>
                <Footer filter={visibilityFilter}
                        onFilterChange={nextFilter => dispatch(Actions.setVisibilityFilter(nextFilter))}/>
            </div>
        )
    }
}

function selectTodos(todos, filter) {
    switch (filter) {
        case Actions.VisibilityFilters.SHOW_ALL:
            return todos;
        case Actions.VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case Actions.VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

export default connect(select)(App);
