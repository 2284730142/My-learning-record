import React from 'react';
import PropTypes from 'prop-types';
import HomeLayout from '../../layouts/HomeLayout';

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: [],
            userList: []
        }
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    componentWillMount() {
        fetch('http://localhost:3000/book', {})
            .then(res => res.json())
            .then(res => {
                this.setState({
                    bookList: res
                });
            });
        fetch('http://localhost:3000/user', {})
            .then(res => res.json())
            .then(res => {
                this.setState({
                    userList: res
                });
            });
    }

    // 编辑图书操作
    handleEdit(book) {
        this.context.router.history.push('/book/edit/' + book.id);
    }

    // 删除图书操作
    handleDel(book) {
        const confirmed = confirm(`确定要删除图书《${book.name}》吗？`);

        if (confirmed) {
            fetch('http://localhost:3000/book/' + book.id, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        bookList: this.state.bookList.filter(item => item.id !== book.id)
                    });
                    alert('删除图书成功');
                })
                .catch(err => {
                    console.error(err);
                    alert('删除图书失败');
                });
        }
    }

    render() {

        const {bookList, userList} = this.state;

        return (
            <HomeLayout title='图书列表'>
                <table>
                    <thead>
                    <tr>
                        <th>书籍ID</th>
                        <th>书籍名</th>
                        <th>价格</th>
                        <th>所属人员id</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        bookList.map((book) => {
                            return (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.name}</td>
                                    <td>{book.price}</td>
                                    <td>{
                                        // map方法也可以用于对象的过滤
                                        userList.map((user) => {
                                            if (book.owner_id === user.id) {
                                                return user.name;
                                            }
                                        })
                                    }</td>
                                    <td>
                                        <a href="javascript:void(0)" onClick={() => this.handleEdit(book)}>编辑</a>
                                        |
                                        <a href="javascript:void(0)" onClick={() => this.handleDel(book)}>删除</a>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </HomeLayout>
        );
    }
}

export default BookList;