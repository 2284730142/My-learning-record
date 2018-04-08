const Form = React.createClass({
    getInitialState() {
        return {
            inputValue: 'leo',
            inputValue2: '',
            checkboxValue: false,
            radioValue: false
        }
    },
    changeHandle(e) {
        // this.state.inputValue = e.target.value;
        // this.forceUpdate();
        this.setState({
            inputValue: e.target.value
        });
        console.log(this.state.inputValue)
    },
    changeHandle2(e) {
        // defaultValue只会加载一次，修改之后刷新不会修改，有value时不用defaultValue，会覆盖后者
        this.state.inputValue2 = e.target.value;
    },
    changeCheckBoxHandle(e) {
        // defaultChecked同defaultValue
        this.setState({
            checkboxValue: !this.state.checkboxValue
        });
    },
    changeRadioHandle(e) {
        this.setState({
            radioValue: !this.state.radioValue
        });
    },
    render() {
        return (
            <form action="">
                <input type="text" defaultValue="liang" onChange={this.changeHandle2}/>
                <input type="text" value={this.state.inputValue} onChange={this.changeHandle}/>
                <input type="checkbox" checked={this.state.checkboxValue} onChange={this.changeCheckBoxHandle}/>
                <input type="radio" checked={this.state.radioValue} onChange={this.changeRadioHandle}/>
                <select name="" id="" value="B">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <select name="" id="" multiple value={['B','C']}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <textarea name="" id="" cols="30" rows="10" value='text'></textarea>
            </form>
        );
    }
});

ReactDOM.render(
    <Form/>
    , document.getElementById('test'));

setTimeout(function () {
    ReactDOM.render(
        <Form/>
        , document.getElementById('test'));
}, 5000);