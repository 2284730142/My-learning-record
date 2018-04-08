/*
* 每个逻辑“路线”有两个组件，一个用于边栏，一个用于主要部分。
* 现在在路径与当前URL匹配时将它们呈现在不同的位置。
* */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

// 定义组件内容的类（或者这个类不写，以设置参数的形式写在SidebarExample的render()中也可以，不过这样写可以更好的分离界面）
class Routes {
    constructor() {
    }
}
// 总体思想：用同一个路径下的属性配置不同的组件
Routes.routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home</h2>
    },
    {
        path: '/bubblegum',
        sidebar: () => <div>bubblegum!</div>,
        main: () => <h2>Bubblegum</h2>
    },
    {
        path: '/shoelaces',
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>
    }
];

class SidebarExample extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(Routes.routes);
        return (
            <div style={{display: 'flex'}}>
                <div style={{padding: '10px', width: '40%', background: '#f0f0f0'}}>
                    <ul style={{listStyleType: 'none', padding: 0}}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/bubblegum">Bubblegum</Link></li>
                        <li><Link to="/shoelaces">Shoelaces</Link></li>
                    </ul>
                    {
                        // 你可以在你的应用程序中尽可能多地渲染一个<Route>。
                        // 它将呈现与URL匹配的任何其他的<Route>。所以，一个侧边栏或主要地方或其他任何需要你呈现在同一网址最多地方的东西无非是多<Route>.
                        Routes.routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.sidebar}
                            />
                        ))
                    }
                </div>
                <div style={{flex: 1, padding: '10px'}}>
                    {
                        // 用以上相同的路径渲染更多的<路径>，但这次使用不同的组件
                        Routes.routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

ReactDOM.render((
    <Router>
        <SidebarExample/>
    </Router>
), document.getElementById('root'));