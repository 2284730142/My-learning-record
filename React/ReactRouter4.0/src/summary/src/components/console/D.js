import React from 'react';

export default class D extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                ddd
            </div>
        )
    }
}