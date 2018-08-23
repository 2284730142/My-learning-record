import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './App';
import Reducer from './reducer';

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let rootElement = document.getElementById('container');
ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>,
    rootElement
);
