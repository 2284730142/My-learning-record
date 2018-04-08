import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// 优先定义（引入）组件
class Sandwiches extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2>Sandwiches</h2>
        );
    }
}

class Bus extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2>Bus</h2>
        );
    }
}

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2>Cart</h2>
        );
    }
}

class Tacos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {routes} = this.props;
        console.log(this.props);
        return (
            <div>
                <h2>Tacos</h2>
                <ul>
                    <li><Link to='/tacos/bus'>Bus</Link></li>
                    <li><Link to='/tacos/cart'>Cart</Link></li>
                </ul>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </div>
        );
    }
}

// 定义组件路由
class RouteWithSubRoutes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const route = this.props;
        /*console.log(route.component);*/
        return (
            <Route path={route.path}
                   render={props => {
                       return (
                           <div>
                               <route.component {...props} routes={route.routes}/>
                           </div>
                       );
                   }}/>
        );
    }
}

// 定义路由的配置(不可以放在上面，因为加载的时候必须先引入组件才可以找到他们)
class Routes {
}

Routes.routes = [
    {
        path: '/sandwiches',
        component: Sandwiches
    },
    {
        path: '/tacos',
        component: Tacos,
        routes: [
            {
                path: '/tacos/bus',
                component: Bus
            },
            {
                path: '/tacos/cart',
                component: Cart
            }
        ]
    }
];

// 定义组件的核心，并传递配置信息进去

class RouteConfigExample extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {routes} = Routes;
        /*console.log(routes);*/
        return (
            <div>
                <ul>
                    <li><Link to="/tacos">Tacos</Link></li>
                    <li><Link to="/sandwiches">Sandwiches</Link></li>
                </ul>

                {
                    routes.map((route, i) => {
                        /*console.log(i, route);*/
                        return (
                            <RouteWithSubRoutes key={i} {...route}/>
                        );
                    })
                }
            </div>
        );
    }
}

ReactDOM.render((
    <Router>
        <RouteConfigExample/>
    </Router>
), document.getElementById('root'));
