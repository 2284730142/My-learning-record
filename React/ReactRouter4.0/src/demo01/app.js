/*
* demo1：第一部分代码示例
* */
/*import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

/!*
* 当前部分为不使用react-route情况下如何进行路由切换
* *!/
//申明三个Child组件：About，Inbox，Home
class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>About</div>
        );
    }
}

class Inbox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Inbox</div>
        );
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Home</div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {route: window.location.hash.substr(1)};
    }
    //生命周期钩子
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            });
            console.log(this.state);
        })
    }

    render() {
        let Child;
        switch (this.state.route) {
            case '/about':
                Child = About;
                break;
            case '/inbox':
                Child = Inbox;
                break;
            default:
                Child = Home;
        }
        //直接加载Child组件；
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/inbox">Inbox</a></li>
                </ul>
                <Child/>
            </div>
        );
    }
}
//执行网页中渲染操作
ReactDOM.render(<App/>, document.getElementById('root'));*/
/*
* demo1：第二部分代码示例
* */
/*
* 使用react-router之后的情况
* */
import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
// 首先我们需要导入一些组件...
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//申明三个Child组件：About，Inbox，Home
class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2>关于</h2>
        );
    }
}
class Topic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //这里用来获取参数
        console.log(this.props.match.params);
        return (
            <div>{this.props.match.params.id}</div>
        );
    }
}
class Inbox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // this.props.match:获取到当前的url
        console.log(this.props.match);
        return (
            <div>
                <h2>Inbox</h2>
                <ul>
                    <li><Link to={this.props.match.url + '/这是id1'}>A</Link></li>
                    <li><Link to={this.props.match.url + '/这是id2'}>B</Link></li>
                    <li><Link to={this.props.match.url + '/这是id3'}>C</Link></li>
                </ul>
                <Route path={this.props.match.url+'/:id'} component={Topic}/>
                <Route exact path={this.props.match.url} render={() => (
                    <h3>请选择一个主题。</h3>
                )}/>
            </div>
        );
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2>首页</h2>
        );
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        /*//尝试获取路径名字（不可用）
        this.path = __dirname;*/
    }

    // 然后我们从应用中删除一堆代码和
    // 增加一些 <Link> 元素...
    render() {
        return (
            <div>
                <div>
                    <h1>App</h1>
                    {/* //把 <a> 变成 <Link> */}
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/inbox">Inbox</Link></li>
                    </ul>
                </div>
                {/* //接着用 `this.props.children` 替换 `<Child>` router 会帮我们找到这个 children*/}
                <div>{this.props.children}</div>
            </div>
        )
    };
}

// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
//Router底下只能有一个Route
ReactDOM.render((
    <Router>
        <App>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/inbox" component={Inbox}/>
        </App>
    </Router>
), document.getElementById('root'));