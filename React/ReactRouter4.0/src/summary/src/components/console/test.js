import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import A from './components/A';
import B from './components/B';
import C from './components/C';
import D from './components/D';

ReactDOM.render(
    <Router>
        <div>
            <A>
                <B i={1}>
                    {() => {
                        return (<div>11</div>);
                    }}
                </B>
                <B t={2}>
                    {() => {
                        return (<div>{11 + 11}</div>);
                    }}
                </B>
                <B g={3}>
                    {() => {
                        return (<C cl={4}/>);
                    }}
                </B>
                vvvv
            </A>
            <Route component={D}/>
        </div>
    </Router>,
    document.getElementById('container')
);