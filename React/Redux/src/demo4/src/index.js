import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import Container from './containers/Container';

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(() => {
    console.log(store.getState())
});
let rootElement = document.getElementById('container');
render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    rootElement
);