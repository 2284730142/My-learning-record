const LinkedStateMixin = React.addons.LinkedStateMixin;

const Comp = React.createClass({
    displayName: 'Comp',
    mixins: [LinkedStateMixin],
    getInitialState() {
        return {
            name: ''
        }
    },
    render() {

        var myLink = {
            value: this.state.value,
            requestChange: (newValue) => {
                this.setState({name: newValue});
            }
        };
        //this.linkState('name')
        return (
            <div>
                <div>{this.state.name}</div>
                <input type="text" valueLink={myLink}/>
            </div>
        );
    }
});


ReactDOM.render(
    <Comp/>
    , document.getElementById('test'));