const Item = React.createClass({
    displayName: 'Item',
    getDefaultProps() {
        console.log('get defult props');
        return {
            group: 123
        }
    },
    getInitialState() {
        console.log('get initial state');
        return {
            name: 'leo'
        }
    },
    componentWillMount() {
        console.log('component will mount');
        this.state.name = 'liang';
    },
    componentDidMount() {
        console.log('component did mount');
        const dom = ReactDOM.findDOMNode(this);
        console.log(dom);

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
        // state 这是对内部的
        console.log('component Will Receive Props');
    },
    shouldComponentUpdate(nextProps, nextState) {
        // 判断是否真的更新了
        console.log('should component update');
        return false;
    },
    componentWillUpdate(nextProps, nextState) {
        console.log('component will update');
    },
    componentDidUpdate(oldProps, oldState) {
        console.log('component did update');
    },
    update() {
        this.setState({name: 'zeng'});
        // forceUpdate 会绕过shouldComponentUpdate来执行更新周期
        // this.forceUpdate();
    },
    render() {
        console.log('render');
        return <div>{this.props.group + this.state.name}
            <button onClick={this.update}>update</button>
        </div>
    },
    componentWillUnmount() {
        console.log('component will unmount');
        clearInterval(this.state.loopNum);
    }
});

function render(bool) {
    ReactDOM.render(<div>
        <Item/>
        {bool ? <Item/> : ''}
    </div>, document.getElementById('test'));
}

render(true);

document.getElementById('clear').onclick = function () {
    render();
};