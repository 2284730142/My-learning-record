import React from 'react';
import {Link} from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HomeLayout title='Welcome'>
                <ul>
                    <li><Link to='/user/add'>添加用户</Link></li>
                    <li><Link to='/user/list'>用户列表</Link></li>
                    <li><Link to='/book/add'>添加图书</Link></li>
                    <li><Link to='/book/list'>图书列表</Link></li>
                </ul>
            </HomeLayout>
        );
    }
}

export default Home;
