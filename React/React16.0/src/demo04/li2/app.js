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


        setInterval(function () {
            if (isYellow) {
                dom.style.backgroundColor = 'red';
                isYellow = false;
            } else {
                dom.style.backgroundColor = 'yellow';
                isYellow = true;
            }
        }, 1000);
    },
    render() {
        console.log('render');
        return <div>{this.props.group + this.state.name}</div>
    }
});

ReactDOM.render(<div>
    <Item/>
</div>, document.getElementById('test'));