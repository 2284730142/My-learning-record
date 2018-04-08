import React from 'react';
import {Link, Route, NavLink, Switch} from 'react-router-dom';

import Home from '../frame/Home';
import Page1 from '../frame/Page1';
import Page2 from '../frame/Page2';
import Page3 from '../frame/Page3';
import Page4 from '../frame/Page4';

export default class MainRouteCentral extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'main'}>
                {/*<Link></Link> 相当于一个a标签的组件，可以给它上原本就有的属性*/}
                <li>
                    <Link to={'/'}>
                        home
                    </Link>
                </li>
                {/*replace一般都是false，处理回退时的跳转*/}
                <li>
                    <Link to={{
                        pathname: '/page1',
                        search: '?sort=name',
                        hash: '#the-hash',
                        state: {fromDashboard: true, aa: 123}
                    }}
                          className={'linkpage1'}>
                        page1
                    </Link>
                </li>
                <li>
                    <Link replace={false}
                          to={'/page2/ssss'}>
                        page2
                    </Link>
                </li>
                <li>
                    {/*activeClassName,activeStyle通字面意思，二选一*/}
                    <NavLink to={'/page3'}
                             activeClassName={'active'}
                             activeStyle={{color: 'green', fontSize: '30px'}}
                             isActive={() => {
                                 // 这个方法会在每次换导航的时候执行一次，可以用来确认你的导航是否匹配成功啥的
                                 console.log('决定导航是否激活，或者在导航激活时候做点别的事情。');
                             }}>
                        page3
                    </NavLink>
                </li>
                <li>
                    <Link to={'/page4'}>
                        page4
                    </Link>
                </li>
                <hr/>
                {/*当路由匹配上时对应的页面才会显示,等于说只要匹配成功，那就全部都会显示*/}
                <div className={'xianshiyemian'}>
                    {/*只渲染出第一个与当前访问地址匹配的 <Route> 或 <Redirect>。*/}
                    <Switch>
                        {/*exact: bool
                        如果为 true，path 为 '/one' 的路由将不能匹配 '/one/two'，反之(即只要被匹配的都会显示)，亦然。
                        strict: bool
                        对路径末尾斜杠的匹配。如果为 true。path 为 '/one/' 将不能匹配 '/one' 但可以匹配 '/one/two'。
                        如果要确保路由没有末尾斜杠，那么 strict 和
                        exact 都必须同时为 true*/}
                        <Route exact path={'/'} component={Home}/>
                        <Route path={'/page1'} component={Page1}/>
                        <Route path={'/page2/:id'} component={Page2}/>
                        <Route path={'/page3'} component={Page3}/>
                        <Route path={'/page4'} component={Page4}/>
                    </Switch>
                </div>
            </div>
        )
    }
}