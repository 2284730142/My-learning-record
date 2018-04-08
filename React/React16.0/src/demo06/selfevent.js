const Comp = React.createClass({
    getInitialState() {
        return {
            name: '',
            group: ''
        }
    },
    changeHandle(e) {
        this.setState({name: e.target.value});
        this.props.onChangeName(this.state.name);
    },
    render() {

        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.changeHandle}/>
            </div>
        );
    }
});
// 自定义事件，把方法作为参数传进去，然后进行修改（类似回调）
function changeNameHandle(name) {
    console.log(name);
}
function chageAll() {

}
ReactDOM.render(
    <Comp onChangeName={changeNameHandle} onChangeAll={chageAll}/>
    , document.getElementById('test')
);