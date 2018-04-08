// React.Component

/*
const exf = {
    test() {
        alert('ok test mixins' + this.props.group);
    }
};
// 这是一种创建方式（以前的）
const Item = React.createClass({
        displayName: 'Item',
        getDefaultProps() {
            return {
                group: 'javascript'
            }
        },
        getInitialState() {
            return {
                result:123
            }
        },
        mixins: [exf],//混合写法
        render() {
            return (
                <div>
                    {this.props.group}
                    <button onClick={this.test}>click me!</button>
                </div>
            )
            // return React.createElement(
            //     'div',
            //     null,
            //     this.props.group
            // );
        }
    }
);
*/

// ES6 的创建形式
class Item extends React.Component {

    constructor(props) {
        super(props);

        // getInitialState
        this.state = {
            result:123
        }
    }

    // getDefaultProps getter
    /*static get defaultProps() {
        return {
            group: 'javascript'
        }
    }*/

    // mixins: [exf], ES6不支持混合模式
    test() {
        alert('ok test mixins' + this.props.group);
    }

    render() {
        return (
            <div>
                {this.props.group}
                <button onClick={this.test.bind(this)}>click me!</button>
            </div>
        )
    }
}
// static get defaultProps
Item.defaultProps = {
  group:'javascript'
};


ReactDOM.render(<Item />, document.getElementById('test'));