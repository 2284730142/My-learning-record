import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Person extends React.Component {
    constructor(props) {
        super(props);
        // 定义参数
        this.PEEPS = [
            {id: 0, name: 'Michelle', friends: [1, 2, 3]},
            {id: 1, name: 'Sean', friends: [0, 3]},
            {id: 2, name: 'Kim', friends: [0, 1, 3]},
            {id: 3, name: 'David', friends: [1, 2]},
        ];
    }
    // find方法，匹配相同id的人然后返回
    find(id) {
        // 不能用index.html直接打开会报错的，要用npm start打开文件
        if (!isNaN(id)) {
            return this.PEEPS.find(p => p.id == id);
        } else {
            return this.PEEPS[0];
        }
    }

    // 每次通过传入的参数进行筛选，将当前组件放入Route中并且修改match的值，实现递归
    render() {
        console.log(this.props.match);
        const person = this.find(this.props.match.params.id);
        console.log(person);
        console.log('---------------------------------------');
        return (
            <div>
                <h3>{person.name}'s Friends</h3>
                <ul>
                    {person.friends.map(id => (
                        <li key={id}>
                            <Link to={`${this.props.match.url}/${id}`}>
                                {this.find(id).name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Route path={`${this.props.match.url}/:id`} component={Person}/>
            </div>
        );
    }
}
// 创建RecursiveExample组件，并在Person组件中传入参数match初始化
class RecursiveExample extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Person match={{params: {id: 0}, url: ''}}/>
        );
    }
}

ReactDOM.render((
    <Router>
        <RecursiveExample/>
    </Router>
), document.getElementById('root'));