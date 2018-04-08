class Item extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li>
                one one ! item
            </li>
        );
    };
}

/*
* 1.
* */
//ReactDOM.render(<h1>title</h1>, document.getElementById('test'));
//翻译过后就是下面的代码
//ReactDOM.render(React.createElement('h1', null, 'title'), document.getElementById('test'));

/*
* 2.
* */

const bool = false;
// ReactDOM.render(<ul style={{backgroundColor: 'red'}} abc="123">
//     {bool ? <Item/> : <h1>my name is h1</h1>}
//     <Item/>
// </ul>, document.getElementById('test'));

// -webkit- 其他的都是大写开头作为前缀->Wenkit
// -ms- 它第一个字母小写 ->ms
ReactDOM.render(
    React.createElement('ul',
        {style: {backgroundColor: 'yellow'}, abc: '123'},
        [
            bool ? React.createElement(Item) : React.createElement('h1',null,'my name is h1'),
            React.createElement(Item)
        ]
    ), document.getElementById('test'));
