import React from 'react';

export default class Page1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //history 对象是可变的，建议从 <Route> 的 prop 里来获取 location，而不是从 history.location 直接获取。
        // 这样可以保证 React 在生命周期中的钩子函数正常执行
        console.log(this.props.history);
        // match是与URL匹配的信息
        console.log(this.props.match);
        // location 通过这种方式获取，
        // 指你当前的位置，将要去的位置，或是之前所在的位置
        console.log(this.props.location);
        return (
            <div className={'page1'}>
                Page1
            </div>
        )
    }
}