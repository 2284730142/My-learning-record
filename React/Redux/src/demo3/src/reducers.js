import {combineReducers} from 'redux'
import * as Actions from './actions';

const {SHOW_ALL} = Actions.VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case Actions.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case Actions.ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case Actions.COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});
export default todoApp;