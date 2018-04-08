import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, HashRouter, Switch, hashHistory, Link} from 'react-router-dom';
import HomePage from './pages/Home';
import UserAddPage from './pages/User/UserAdd';
import UserListPage from './pages/User/UserList';
import UserEditPage from './pages/User/UserEdit';
import BookAddPage from './pages/Book/BookAdd';
import BookListPage from './pages/Book/BookList';
import BookEditPage from './pages/Book/BookEdit';

/*<h2>Hello React</h2>*/
ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/user/add' component={UserAddPage}/>
            <Route exact path='/user/list' component={UserListPage}/>
            <Route exact path="/user/edit/:id" component={UserEditPage}/>
            <Route exact path='/book/add' component={BookAddPage}/>
            <Route exact path='/book/list' component={BookListPage}/>
            <Route exact path="/book/edit/:id" component={BookEditPage}/>
        </Switch>
    </Router>
), document.getElementById('app'));