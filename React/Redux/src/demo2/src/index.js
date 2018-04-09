import {createStore} from 'redux';

import todoApp from './reducer/reducer';

import * as Actions from './actions/testAction';

let store = createStore(todoApp);

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// 发起⼀系列 action
store.dispatch(Actions.addTodo('Learn about actions'));
store.dispatch(Actions.addTodo('Learn about reducers'));
store.dispatch(Actions.addTodo('Learn about store'));
store.dispatch(Actions.toggleTodo(0));
store.dispatch(Actions.toggleTodo(1));
store.dispatch(Actions.setVisibilityFilter(Actions.VisibilityFilters.SHOW_COMPLETED));

unsubscribe();