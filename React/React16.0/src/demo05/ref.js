const Comp = React.createClass({


    click() {
        this.refs.myinput.focus();
    },
    componentDidMount() {
        this.refs.myinput2.focus();
        console.log('component did mount');
    },
    render() {
        console.log('render');
        return (
            <div>
                <input type="text" ref={function (dom) {
                    // 这里的函数调用时先于DidMount的
                    dom.focus();
                    console.log('ref function');
                }}/>
                <input type="text" ref="myinput"/>
                <input type="text" ref="myinput2"/>
                <button onClick={this.click}>click me!</button>
            </div>
        );
    }
});

ReactDOM.render(
    <Comp/>
    , document.getElementById('test')
);