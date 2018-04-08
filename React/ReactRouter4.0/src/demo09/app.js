/*
* 模糊匹配，应用Switch来控制。
*   有时你想有一个白名单的静态路径像“/about”和“/company”，但也允许动态的。
    类似“/user”的模式。问题是“/about”是不明确的，将匹配“/about”和“/user”。
    大多数路由器都有一个算法来为你决定什么。
    它会匹配，因为他们只允许你匹配一个。
    “route”。反应路由器允许您在多个地方进行匹配。
    目的（侧边栏，面包屑，等）。所以，当你
    要清除任何模糊匹配，而不是匹配
    关于“/about”/“/user”，只需将<Switch>。它会呈现第一个匹配的。
* */

import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2>About</h2>
        );
    }
}

class Company extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2>Company</h2>
        );
    }
}

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {match} = this.props;
        return (
            <div>
                <h2>User: {match.params.user}</h2>
            </div>
        );
    }
}

class AmbiguousExample extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/about'>About Us (static)</Link></li>
                    <li><Link to='/company'>Company (static)</Link></li>
                    <li><Link to='/kim'>Kim (dynamic)</Link></li>
                    <li><Link to='/chris'>Chris (dynamic)</Link></li>
                </ul>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/company" component={Company}/>
                    <Route path="/:user" component={User}/>
                </Switch>
            </div>
        );
    }
}

ReactDOM.render((
    <Router>
        <AmbiguousExample/>
    </Router>
), document.getElementById('root'));