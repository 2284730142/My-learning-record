'use strict';

const React = require('react');
const TNode = require('tree-node');
const TreeNode = require('./TreeNode');


const Tree = React.createClass({
    getInitialState() {
        return {
            treeData: new TNode,
            menuX: 0,
            menuY: 0,
            menuDisplay: false,
            childId: ''
        }
    },
    componentWillMount() {
        if (this.props.json) {
            this.state.treeData.reborn(this.props.json);
        }
    },
    openMenu(x, y, childId) {
        this.setState({menuX: x, menuY: y, menuDisplay: true, childId: childId});
    },
    add() {
        var title = window.prompt('title');
        var child = new TNode();
        child.data('title', title);
        this.state.treeData.getNode(this.state.childId).appendChild(child);
        this.forceUpdate();
    },
    del() {
        this.state.treeData.removeChild(this.state.childId);
        this.closeMenu();
    },
    up() {
        this.state.treeData.up(this.state.childId);
        this.closeMenu();
    },
    down() {
        this.state.treeData.down(this.state.childId);
        this.closeMenu();
    },
    closeMenu() {
        this.setState({menuDisplay: false});
    },
    render() {
        const nodeListDOM = [];
        for (let nodeId of this.state.treeData.childIds) {
            var childNode = this.state.treeData.getChild(nodeId);
            nodeListDOM.push(<TreeNode openMenu={this.openMenu} key={childNode.id} node={childNode.json}/>);
        }
        return (
            <div onContextMenu={e => e.preventDefault()}>
                <ul>
                    {nodeListDOM}
                </ul>
                <div onMouseLeave={this.closeMenu}
                     style={{
                         display: this.state.menuDisplay ? 'block' : 'none',
                         left: this.state.menuX,
                         top: this.state.menuY,
                         position: 'absolute'
                     }}>
                    <ul className={'list-group'}>
                        <li className={'list-group-item'}><a href="javascript:;" onClick={this.add}>添加</a></li>
                        <li className={'list-group-item'}><a href="javascript:;" onClick={this.del}>删除</a></li>
                        <li className={'list-group-item'}><a href="javascript:;" onClick={this.up}>上移</a></li>
                        <li className={'list-group-item'}><a href="javascript:;" onClick={this.down}>下移</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Tree;







