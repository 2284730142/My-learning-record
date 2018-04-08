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
    render() {
        return <div>{this.props.group + this.state.name}</div>
    }
});

ReactDOM.render(<div>
    <Item/>
    <Item/>
    <Item/>
</div>, document.getElementById('test'));