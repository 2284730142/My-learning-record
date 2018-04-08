import React from 'react';
import UserEditor from '../../components/UserEditor';
import HomeLayout from '../../layouts/HomeLayout';

class UserAdd extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <HomeLayout title='添加用户'>
                <UserEditor/>
            </HomeLayout>
        );
    }
}

export default UserAdd;