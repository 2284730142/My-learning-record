const Comp = React.createClass({
    getInitialState() {
        return {
            top: 0,
            left: 0
        }
    },
    keyUp(e) {
        // 监听按键点击事件，这里只判断上下左右四个按键的 e.keyCode是他们的具体数值
        // 依旧通过更改状态的形式来修改当前的位置
        console.log(e.keyCode);
        switch (e.keyCode) {
            case 37:
                this.setState({left: this.state.left - 5});
                break;
            case 38:
                this.setState({top: this.state.top - 5});
                break;
            case 39:
                this.setState({left: this.state.left + 5});
                break;
            case 40:
                this.setState({top: this.state.top + 5});
                break;
        }
    },
    render() {
        return (
            <div style={{position: 'relative', width: '450px', height: '450px', background: 'yellow'}}
                 tabIndex={1}
                 onKeyDown={this.keyUp}
                 ref={dom => {
                     // 这里要多做一个判断否则会报错
                     if (dom) {
                         dom.focus()
                     }
                 }}>
                <div style={{
                    top: this.state.top + 'px',
                    left: this.state.left + 'px',
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    background: 'red'
                }}> </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Comp/>
    , document.getElementById('test')
);