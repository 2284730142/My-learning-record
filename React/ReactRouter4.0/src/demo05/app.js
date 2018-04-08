import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
// 说明的主页组件
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>
                一个 <code>&lt;Switch></code>
                组件渲染的第一个子元素<code>&lt;Route></code>
                会匹配当前子元素中的<code>&lt;Route></code>没有被匹配的<code>path</code>
            </p>
        );
    }
}
// 被匹配的组件
class WillMatch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3>匹配成功</h3>
        );
    }
}
// 没有匹配的组件
class NoMatch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3>没有匹配的路径名字：<code>{this.props.location.pathname}</code>（404页面）</h3>
        );
    }
}


class NoMatchExample extends React.Component{
    constructor(props){
        super(props);
    }
    // 页面显示并进行匹配后渲染的组件
    render(){
        return (
            <div>
                <ul>
                    <li><Link to='/'>主页</Link></li>
                    <li><Link to='/old-match'>已匹配，重新定向(old-match)</Link></li>
                    <li><Link to='/will-match'>匹配(will-match)</Link></li>
                    <li><Link to='/will-not-match'>不匹配(will-not-match)</Link></li>
                    <li><Link to='/also/will/not/match'>总是不匹配(/also/will/not/match)</Link></li>
                </ul>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Redirect from='/old-match' to='/will-match'/>
                    <Route path='/will-match' component={WillMatch}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }
}

ReactDOM.render((
        <Router>
            <NoMatchExample/>
        </Router>
    ), document.getElementById('root')
);