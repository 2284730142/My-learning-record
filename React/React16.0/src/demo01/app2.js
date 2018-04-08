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
        this.state = {
            isEdit: false,
            value: ''
        };
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
        this.changeHandle = this.changeHandle.bind(this);
        this.edit = this.edit.bind(this);
    }

    remove() {
        this.props.onRemove(this.props.id);
    }

    save() {
        this.props.onSave(this.props.id, this.state.value);
        this.setState({isEdit: true});
    }

    edit() {
        this.props.onEdit(this.props.id, this.state.value);
        this.setState({isEdit: false});
    }

    changeHandle(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return this.state.isEdit ? (
            <li className="list-group-item">
                {this.props.id}. {this.props.value}
                <a href="#" className="right glyphicon glyphicon-edit" onClick={this.edit}></a>
                <a href="#" className="right glyphicon glyphicon-remove" onClick={this.remove}></a>
            </li>
        ) : (
            <li className="list-group-item">
                {this.props.id}
                {this.props.value ? (
                    <input type="text" className="item-edit" onChange={this.changeHandle} defaultValue={this.props.value}/>
                ) : (
                    <input type="text" className="item-edit" onChange={this.changeHandle}/>)}
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
            item: new Map()
        };
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
        this.edit = this.edit.bind(this);
    }

    // 添加新组建
    add() {
        const key = ++this.state.key;
        this.setState({item: this.state.item.set(key, {value: '', editValue: ''})});
    }

    // 删除组件
    remove(id) {
        this.state.item.delete(id);
        this.forceUpdate();
    }

    //保存组件的状态
    save(id, value) {
        this.setState({item: this.state.item.set(id, {value: value, editValue: ''})});
    }

    // 编辑组件
    edit(id, value) {
        this.setState({item: this.state.item.set(id, {value: value, editValue: ''})});
    }

    render() {
        const ItemDOM = [];

        for (let entity of this.state.item) {
            ItemDOM.push(<Item
                id={entity[0]}
                key={entity[0]}
                value={entity[1].value}
                onRemove={this.remove}
                onSave={this.save}
                onEdit={this.edit}
            />);
        }

        return (
            <div>
                <button onClick={this.add.bind(this)} className="btn btn-defult">Add</button>
                <ul className="list-group">
                    {ItemDOM}
                </ul>
            </div>
        );
    };
}

ReactDOM.render(<List/>, document.getElementById('test'));