/*
ReactDOM.render(
    <div>
        <button className="btn btn-defult">Add</button>
        <ul className="list-group">
            <li className="list-group-item">ds
                <a href="#" className="right glyphicon glyphicon-edit"></a>
                <a href="#" className="right glyphicon glyphicon-remove"></a>
            </li>

            <li className="list-group-item">
                <input type="text" className="item-edit"/>
                <a href="#" className="glyphicon glyphicon-share"></a>
            </li>
        </ul>
    </div>
    , document.getElementById('test'));*/


// Item
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
    }

    remove() {
        this.props.onRemove(this.props.id);
    }

    edit() {
        this.props.onEdit(this.props.id, this.props.value);
    }

    render() {
        return (
            <li className="list-group-item">
                {this.props.id}. {this.props.value}
                <a href="#" className="right glyphicon glyphicon-edit" onClick={this.edit}></a>
                <a href="#" className="right glyphicon glyphicon-remove" onClick={this.remove}></a>
            </li>
        );
    };
}

// ItemEditor 编辑组件
class ItemEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
        this.remove = this.remove.bind(this);
        this.changeHandle = this.changeHandle.bind(this);
        this.save = this.save.bind(this);
    }

    // 改变输入内容时的监听
    changeHandle(e) {
        this.setState({value: e.target.value});
    }

    // 通过父组件传入的onRemove的方法传入id后回调
    remove(e) {
        this.props.onRemove(this.props.id);
    }

    // 保存当前数据
    save() {
        this.props.onSave(this.props.id, this.state.value);
    }

    render() {
        return (
            <li className="list-group-item">
                {this.props.id}
                <input type="text" onChange={this.changeHandle} value={this.state.value} className="item-edit"/>
                <a href="#" className="glyphicon glyphicon-share" onClick={this.save}></a>
                <a href="#" className="glyphicon glyphicon-remove" onClick={this.remove}></a>
            </li>
        );
    };
}

// List 主要渲染的组件
class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            key: 0,
            list: new Map(),
            editList: new Map()
        };
    }

    // 添加编辑组件
    add() {
        const key = ++this.state.key;
        this.state.editList.set(key, '');
        this.setState();
    }

    removeItem(id) {
        this.state.list.delete(id);
        this.setState();
    }

    // 删除编辑组件 对组件传入一个方法形成回调的形式来删除组件 注意this的绑定，否则会报错
    removeItemEditor(id) {
        this.state.editList.delete(id);
        this.setState();
    }

    // 保存组件内容，并且变更组件为Item
    save(id, value) {
        this.state.editList.delete(id);
        this.state.list.set(id, value);
        this.setState();
    }

    // 变更为编辑组件
    edit(id, value) {
        this.state.list.delete(id);
        this.state.editList.set(id, value);
        this.setState();
    }

    render() {

        const listDOM = [];
        const editListDOM = [];

        for (let entity of this.state.list) {
            listDOM.push(<Item
                id={entity[0]}
                key={entity[0]}
                onRemove={this.removeItem.bind(this)}
                onEdit={this.edit.bind(this)}
                value={entity[1]}/>)
        }
        // 渲染编辑组件
        for (let entity of this.state.editList) {
            editListDOM.push(<ItemEditor
                id={entity[0]}
                key={entity[0]}
                onRemove={this.removeItemEditor.bind(this)}
                onSave={this.save.bind(this)}
                value={entity[1]}/>)
        }

        return (
            <div>
                <button onClick={this.add.bind(this)} className="btn btn-defult">Add</button>
                <ul className="list-group">
                    {listDOM}
                    {editListDOM}
                </ul>
            </div>
        );
    };
}

ReactDOM.render(<List/>, document.getElementById('test'));