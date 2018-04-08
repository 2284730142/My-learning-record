import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import BookEditor from '../../components/BookEditor';


class BookEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: null
        };
    }

    // 利用这个来做加载中的状态
    componentWillMount() {
        const bookId = this.props.match.params.id;
        // 这个是json-server（快速后台管理程序服务器）的方法，通过某个字段的具体值查找一条数据
        fetch('http://localhost:3000/book/' + bookId)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    book: res
                });
            });
    }

    render() {
        const {book} = this.state;
        return (
            <HomeLayout title="编辑图书">
                {
                    book ? <BookEditor editTarget={book}/> : '加载中...'
                }
            </HomeLayout>
        );
    }
}

export default BookEdit;