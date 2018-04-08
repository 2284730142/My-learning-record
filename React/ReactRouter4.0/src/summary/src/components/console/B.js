import React from 'react';

export default class B extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                bbb
                {this.props.children()}
            </div>
        )
    }
}