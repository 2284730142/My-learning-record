import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(() => {
    console.log(store.getState())
});
let rootElement = document.getElementById('container');
render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>,
    rootElement
);
