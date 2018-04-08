import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import UserEditor from '../../components/UserEditor';


class UserEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }
    // 利用这个来做加载中的状态
    componentWillMount() {
        const userId = this.props.match.params.id;
        // 这个是json-server（快速后台管理程序服务器）的方法，通过某个字段的具体值查找一条数据
        fetch('http://localhost:3000/user/' + userId)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    user: res
                });
            });
    }

    render() {
        const {user} = this.state;
        return (
            <HomeLayout title="编辑用户">
                {
                    user ? <UserEditor editTarget={user}/> : '加载中...'
                }
            </HomeLayout>
        );
    }
}

export default UserEdit;