import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 通过开始的BrowserRouter的keyLength来设置key的长度，默认为6，然后通过以下方式获取
        console.log(this.props.location);
        return (
            <div className={'home'}>
                Home
            </div>
        )
    }
}