/*
* 1.没有输入内容时候不会弹出提示框可以直接跳转
* 2.输入内容之后会跳出提示框以阻止跳转
* 3.提交表单或者删除文本框内的东西，来停止阻止跳转
* 注意使用的组件，Prompt组件
* */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Prompt} from 'react-router-dom';

class One extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>One</h2>
            </div>
        );
    }
}

class Two extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Two</h2>
            </div>
        );
    }
}
// Form核心组件
class Form extends React.Component {
    constructor(props) {
        super(props);
        // 设置isBlocking的值为false
        // （false：不进行阻止，true：进行阻止）
        this.state = {
            isBlocking: false
        }
    }
    // submit方法表单提交事件
    submit(event) {
        // 阻止表单提交默认事件
        event.preventDefault();

        // 重置文本框的值
        event.target.reset();

        // 设置isBlocking为假
        this.setState({
            isBlocking: false
        })
    }

    inputChange(event) {
        // 如果文本框内有值则会阻止跳转，没有则不会
        this.setState({
            isBlocking: event.target.value.length > 0
        })
    }

    render() {
        // 这里的Prompt在readme中有说明
        // 另外绑定事件并且传递参数的方式有两种（React官网上有，这里再提一下）
        // 1.onSubmit事件上是通过箭头函数传递，必须显示的传递参数e
        // 2.onChange事件上是bind(this, 其他参数)的形式，但是在方法中e必须放在所有参数之后即inputChange(其他参数,e){ }这样。
        return (
            <div>
                <form action='' method='' onSubmit={(e) => this.submit(e)}>
                    <Prompt
                        when={this.state.isBlocking}
                        message={location => (
                            `Are you sure you want to go to ${location.pathname}`
                        )}
                    />
                    <p>
                        被阻止了? {this.state.isBlocking ? '是的，现在点击会阻止跳转' : '没有'}
                    </p>
                    <p>
                        <input
                            size="50"
                            placeholder="输入内容来阻止跳转"
                            onChange={this.inputChange.bind(this)}
                        />
                    </p>
                    <p>
                        <button type='submit'>提交表单来停止阻止事件</button>
                    </p>
                </form>
            </div>
        );
    }
}
//声明组件用于定义路由
class PreventingTransitionsExample extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>Form</Link></li>
                    <li><Link to='/one'>One</Link></li>
                    <li><Link to='/two'>Two</Link></li>
                </ul>
                <Route path='/' exact component={Form}/>
                <Route path='/one' component={One}/>
                <Route path='/two' component={Two}/>
            </div>
        );
    }
}

// 渲染操作
ReactDOM.render((
    <Router>
        <PreventingTransitionsExample/>
    </Router>
), document.getElementById('root'));