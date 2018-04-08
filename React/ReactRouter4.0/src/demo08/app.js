/*
* 这里用到了React的附加API，很简单的东西，它就是react的一个组件可以在react-router的路由容器中使用
* 同时你不用再使用css在某些地方
* */
import React from 'react';
import ReactDOM from 'react-dom';
// React附加动画的API ReactCSSTransitionGroup/*这个组件的API文档会在其他时间提供，目前不做赘述*/
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

/*
* 要在.src/index.html中添加如下样式才能出现渐变效果：
*   .fade-enter {
        opacity: 0;
        z-index: 1;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 250ms ease-in;
    }
* */

// 定义css样式通过类的形式，直接添加到渲染的组件上
class Styles {
    constructor() {
    }
}

Styles.fill = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
Styles.content = {
    ...Styles.fill,
    top: '40px',
    textAlign: 'center'
};
Styles.nav = {
    padding: 0,
    margin: 0,
    position: 'absolute',
    top: 0,
    height: '40px',
    width: '100%',
    display: 'flex'
};
Styles.navItem = {
    textAlign: 'center',
    flex: 1,
    listStyleType: 'none',
    padding: '10px'
};
Styles.hsl = {
    ...Styles.fill,
    color: 'white',
    paddingTop: '20px',
    fontSize: '30px'
};

class HSL extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {params} = this.props.match;
        return (
            <div style={{
                ...Styles.fill,
                ...Styles.hsl,
                background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
            }}>
                背景色({params.h}, {params.s}%, {params.l}%)
            </div>
        );
    }
}
// （这个是我自己定义的组件）还有一个专门的NavLink的组件，用于添加当前目标的被选中时的状态样式，在reademe中有详细解释
class NavLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li style={Styles.navItem}>
                <Link {...this.props} style={{color: 'inherit'}}/>
            </li>
        );
    }
}

class AnimationExample extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        /*console.log({...Styles.fill});
        console.log({...Styles.hsl});*/
        return (
            <Route render={({location}) => {
                console.log(location);
                return (
                    <div style={Styles.fill}>
                        <Route exact path="/" render={() => (
                            <Redirect to="/10/90/50"/>
                        )}/>

                        <ul style={Styles.nav}>
                            <NavLink to="/10/90/50">Red</NavLink>
                            <NavLink to="/120/100/40">Green</NavLink>
                            <NavLink to="/200/100/40">Blue</NavLink>
                            <NavLink to="/310/100/50">Pink</NavLink>
                        </ul>

                        <div style={Styles.content}>
                            <ReactCSSTransitionGroup
                                transitionName="fade"
                                transitionEnterTimeout={400}
                                transitionLeaveTimeout={400}>
                                <Route
                                    location={location}
                                    key={location.key}
                                    path="/:h/:s/:l"
                                    component={HSL}/>
                            </ReactCSSTransitionGroup>
                        </div>
                    </div>
                )
            }}/>
        );
    }
}

ReactDOM.render((
    <Router>
        <AnimationExample/>
    </Router>
), document.getElementById('root'));


