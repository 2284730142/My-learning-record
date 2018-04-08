/*
* 优先查看react-router-dom下引入的模块
* 另，暂定将类都写在一起，和正式的区别就是拿到另外的js中需要进行export或者import
* */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';

// 定义一个判断是否登录的类，并定义静态方法以及静态属性
class FakeAuth {
    constructor() {
    }

    // 静态方法：已成功登录
    static authenticate(callback) {
        this.isAuthenticated = true;
        setTimeout(callback, 1000); // fake async
    }

    // 静态方法：退出登录
    static signout(callback) {
        this.isAuthenticated = false;
        setTimeout(callback, 1000);
    }
}

// 静态属性：设置登录的初始状态为未登录
FakeAuth.isAuthenticated = false;

// 创建Piblic组件
class Public extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3>公共页面</h3>
        );
    }
}

// 创建Protected组件
class Protected extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3>私有页面</h3>
        );
    }
}

// 创建withRouter函数的组件
const AuthButton = withRouter(({history, location, match}) => {
    // 这里判断是否登录了，没有登录则会有提示，登录了会显示成功
    return (
        <div>
            {
                FakeAuth.isAuthenticated ? (
                    <p>
                        登录成功!
                        <button onClick={() => {
                            FakeAuth.signout(() => history.push('/'))
                        }}>退出登录
                        </button>
                    </p>
                ) : (
                    <p>你还没有登录.</p>
                )
            }
        </div>
    );
});

//创建PrivateRoute组件
/*
* 这个被毙掉的PrivateRoute是官网提供的东西，并且已做修改，
* 但是我这里不支持ES6中的...所以问题无法解决，能够支持的可以试下这个代码段
* （替换掉下面的PrivateRoute组件即可）
* */
/*const PrivateRoute = ({component: Component, ...rest}) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                auth: false,     // 表示是否认证通过
                hasAuthed: false,  // 表示是否向服务器发送过认证请求
            };
        }

        componentDidMount() {
            //authPromise 向服务器发送认证请求，示例以Promise形式返回，result表示认证是否成功
            authPromise().then(result => {
                if (result == true) {
                    this.setState({auth: true, hasAuthed: true});
                } else {
                    this.setState({auth: false, hasAuthed: true});
                }
            })
        }

        render() {
            // 初始渲染时，尚未向服务器发送认证请求，因此不渲染元素
            if (!this.state.hasAuthed) {
                return null;
            }
            return (
                <Route {...rest} render={props => (
                    this.state.auth ? (
                        <Component {...props}/>
                    ) : (
                        <Redirect to={{
                            pathname: '/login',
                            state: {from: props.location}
                        }}/>
                    )
                )}/>
            );
        }
    }
};*/

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    // 登录成功则可以打开私有页面，没有登录则会重定向到/login下（*****这里有几个bug没有解决：
    // 1.未登录点击私有页面不会进行重定向
    // 2.页面会加载两次）
    render() {
        return FakeAuth.isAuthenticated ? (
            <Route path={this.props.path} component={Protected}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: {from: this.props.path}
            }}/>
        );
    }
}

//创建Login组件
class Login extends React.Component {
    constructor(props) {
        super(props);
        // 设置是否需要重定向的属性
        this.state = {
            redirectToReferrer: false
        }
    }

    login() {
        FakeAuth.authenticate(() => {
            this.setState({
                redirectToReferrer: true
            });
        });
    }

    render() {
        // 判断历史路径下的路径名字，没有则赋予第二个路径
        const {from} = this.props.location.state || {from: '/'};

        // 注意ES6的写法，直接匹配this.state下的redirectToReferrer属性
        const {redirectToReferrer} = this.state;
        if (redirectToReferrer) {
            return (
                /*重定向回到from属性的路径*/
                <Redirect to={from}/>
            )
        }
        return (
            <div>
                <p>你必须登录才能进入此路径{from}</p>
                {/*这里的绑定this很重要，因为绑定就会在当前class的方法下使用不了this对象*/}
                <button onClick={this.login.bind(this)}>Log in</button>
            </div>
        );
    }
}

//创建App组件
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    // 生命周期函数，这里没有用到
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <AuthButton/>
                <ul>
                    <li><Link to='/public'>公共页面</Link></li>
                    <li><Link to='/protected'>私有页面</Link></li>
                </ul>
                <div>
                    <Route path='/public' component={Public}/>
                    <Route path='/login' component={Login}/>
                    <PrivateRoute path='/protected'/>
                </div>
            </div>
        );
    }
}

// 渲染操作
ReactDOM.render((
    <Router>
        <App/>
    </Router>
), document.getElementById('root'));
