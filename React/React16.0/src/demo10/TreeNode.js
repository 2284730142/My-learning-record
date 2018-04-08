'use strict';

const React = require('react');

const TreeNode = React.createClass({
    getInitialState() {
        return {
            open: true,
            open2: true,
            className: ''
        }
    },
    onoff() {
        if (this.state.open) {
            this.state.className = 'example-leave example-leave-active';
            this.state.open2 = false;
            this.forceUpdate();
            setTimeout(() => {
                this.setState({open: false})
            }, 200);
        } else {
            this.setState({open: true, open2: true, className: 'example-enter'});
            setTimeout(() => {
                this.setState({className: 'example-enter example-enter-active'});
            }, 200);
        }
    },
    mouseDownHandle(e) {
        e.preventDefault();
        // console.log(e.target);
        // console.log(e.button, e.buttons);
        if (e.button === 2) {
            // console.log(e.screenX, e.screenY,e.clientX,e.clientY);
            this.props.openMenu(e.clientX, e.clientY, this.props.node.id);
        }
    },
    render() {
        const nodeListDOM = [];
        const node = this.props.node;
        for (let nodeId of node.childIdsList) {
            var childNode = node.childs[nodeId];
            nodeListDOM.push(<TreeNode openMenu={this.props.openMenu} key={childNode.id} node={childNode}/>);
        }
        return (
            <li>
                <h3 onMouseDown={this.mouseDownHandle}>
                    <a href="javascript:;" onClick={this.onoff}>
                        <i className={this.state.open2 ? 'glyphicon glyphicon-minus' : 'glyphicon glyphicon-plus'}> </i>
                    </a>
                    {node.data.title}
                </h3>
                <ul className={this.state.className} style={{display: this.state.open ? 'block' : 'none'}}>
                    {nodeListDOM}
                </ul>
            </li>
        );
    }
});

module.exports = TreeNode;







