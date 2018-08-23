import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Action from './action';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            item: {},
            id: 0,
            title: '',
            context: ''
        }
    }

    render() {
        const {dispatch, adList} = this.props;
        const List = !adList.isSearch ? adList.list : adList.searchList;
        return (
            <div>
                <div>
                    <button onClick={() => dispatch(Action.initItem(adList.list))}>刷新</button>
                    <button onClick={() => dispatch(Action.searchItem(this.state.search))}>查询</button>
                    <input type="text" value={this.state.search} onChange={(e) => {
                        this.setState({search: e.target.value})
                    }}/>
                </div>
                <div>
                    <button onClick={(e) => dispatch(Action.addItem({
                        id: this.state.id,
                        title: this.state.title,
                        context: this.state.context
                    }))}>添加
                    </button>
                    id:
                    <input type="text" value={this.state.id} onChange={(e) => {
                        this.setState({id: e.target.value});
                    }}/>
                    title:
                    <input type="text" value={this.state.item.title} onChange={(e) => {
                        this.setState({title: e.target.value});
                    }}/>
                    intro:
                    <input type="text" value={this.state.item.context} onChange={(e) => {
                        this.setState({context: e.target.value});
                    }}/>
                </div>
                <div>
                    {
                        List ? List.map((item, id) => {
                            return (
                                <ul key={id}>
                                    <li>id:{item.id}</li>
                                    <li>title:{item.title}</li>
                                    <li>intro:{item.context}</li>
                                    <li>
                                        <button onClick={() => dispatch(Action.delItem(item.id))}>删除</button>
                                    </li>
                                </ul>
                            )
                        }) : '没有数据'
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App);