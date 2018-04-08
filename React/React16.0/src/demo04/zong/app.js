// 小型内存数据库模板
const list = [];
const database = {
    add(article) {
        list.push(article);
        return list.length - 1;
    },
    del(index) {
        list[index] = null;
    },
    update(index, newArticle) {
        list.splice(index, newArticle, 1);
    },
    get list() {
        return list;
    }
};


const Item = React.createClass({
    displayName: 'Item',
    // 设置初始props
    getDefaultProps() {
        return {
            value: 'no value'
        }
    },
    // 设置初始state
    getInitialState() {
        return {
            value: this.props.value,
            currentHistoryIndex: 0,
            history: [this.props.value]
        }
    },
    componentWillMount() {
        // 创建组件后向state中放入一个dbkey（内存数据库中添加初始化的数据）
        this.state.dbkey = database.add({value: this.state.value});
    },
    componentDidMount() {
        // 创建组件结束后开始动画（显示背景色改变）
        const dom = ReactDOM.findDOMNode(this);
        let isYellow = false;
        this.state.loopNum = setInterval(function () {
            if (isYellow) {
                dom.style.backgroundColor = 'red';
                isYellow = false;
            } else {
                dom.style.backgroundColor = 'yellow';
                isYellow = true;
            }
        }, 1000);
    },
    componentWillReceiveProps(nextProps) {
        // 更新组件的状态时，接收到新的数据，赋给state的value
        this.state.value = nextProps.value;
    },
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    },
    componentWillUpdate(nextProps, nextState) {
        // update datebase
        let dbkey = this.state.dbkey;
        database.update(dbkey, {value: this.state.value});
    },
    componentDidUpdate(oldProps, oldState) {
        // 只要更新组件后提示状态（框体颜色变化），即组件只要当前组件有变化，无论什么地方，都会触发这个
        let dom = ReactDOM.findDOMNode(this);
        // let odlStyle = dom.style.border;
        dom.style.border = '2px solid red';
        setTimeout(function () {
            dom.style.border = '0px solid red';
        }, 2000);
    },
    changeValue(e) {
        this.setState({value: e.target.value});
    },
    save() {//history
        // 不对界面有修改就不用setState
        // this.state.history.push(this.state.value);
        // this.state.currentHistory = this.state.value;
        const value = this.state.value;
        const history = this.state.history;
        const currentHistoryIndex = history.length; // 1
        history.push(value);
        // const currentHistoryIndex = history.length; // 2
        // 简化式写法ES6
        this.setState({
            history,
            currentHistoryIndex
        });
    },
    prev() {
        let currentHistoryIndex = this.state.currentHistoryIndex;
        if (currentHistoryIndex !== 0) {
            currentHistoryIndex -= 1;
            this.setState({currentHistoryIndex});
        }
    },
    next() {
        let currentHistoryIndex = this.state.currentHistoryIndex;
        if (currentHistoryIndex !== this.state.history.length - 1) {
            currentHistoryIndex += 1;
            this.setState({currentHistoryIndex});
        }
    },
    render() {
        console.log('render');
        return (
            <div>
                <div>
                    <button onClick={this.prev}>prev</button>
                    <span>{this.state.history[this.state.currentHistoryIndex]}</span>
                    <button onClick={this.next}>next</button>
                </div>
                <input type="text" value={this.state.value} onChange={this.changeValue}/>
                <button onClick={this.save}>save</button>
            </div>
        );
    },
    componentWillUnmount() {
        console.log('component will unmount');
        clearInterval(this.state.loopNum);
    }
});

ReactDOM.render(
    <div>
        <Item/>
    </div>
    , document.getElementById('test'));