import React from 'react';

export default class A extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div>这是一个网页！</div>
                {this.props.children}
            </div>
        )
    }
}