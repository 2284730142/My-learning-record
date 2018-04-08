/*
* 使用react-router-dom提供的组件，然后通过react强大的功能进行参数传递之后，对当前可视化页面进行修改
* */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// 创建Home组件
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>主页</h2>
            </div>
        );
    }
}
// 创建About组件组件
class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>关于页</h2>
            </div>
        );
    }
}
// 创建自定义路由组件
class OldSchoolMenuLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 获取参数配置：
        // 1.label：当前链接名字
        // 2.to：跳转的目标
        // 3.activeOnlyWhenExact：设置是否为默认页面
        const {label, to, activeOnlyWhenExact} = this.props;
        return (
            <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
                <div className={match ? 'active' : ''}>
                    {match ? '> ' : ''}<Link to={to}>{label}</Link>
                </div>
            )}/>
        );
    }
}

class CustomLinkExample extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 设置传递参数的值
        return (
            <div>
                <OldSchoolMenuLink activeOnlyWhenExact={true} to='/' label='Home'/>
                <OldSchoolMenuLink to='/about' label='About'/>
                <hr/>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
            </div>
        );
    }
}


// 渲染操作
ReactDOM.render((
    <Router>
        <CustomLinkExample/>
    </Router>
), document.getElementById('root'));