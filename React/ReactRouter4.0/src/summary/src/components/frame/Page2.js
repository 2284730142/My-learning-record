import React from 'react';

export default class Page2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 通过之前的主要控制页面 可以传过来一个URL参数 params:{id: "ssss"}
        console.log(this.props.match);
        return (
            <div className={'page2'}>
                Page2
            </div>
        )
    }
}