import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';

import MainRouteCentral from './components/route/MainRouteCentral';


// 配合BrowserRouter组件使用，BrowserRouter是服务器路径的匹配，刷新处理需要服务器来做配合
const getConfirmation = (message, callback) => {
    // 可以用于直接判断用户是否在本地有过登陆信息，或者一些进入主页的限制等等
    // const allowTransition = window.confirm(message);
    // callback(allowTransition)
};

const supportsHistory = 'pushState' in window.history;
ReactDOM.render(
    // xxRouter是一个组件，但是没有jsx，它返回唯一的子元素
    <BrowserRouter
        basename={`${'/index.html'}`}
        getUserConfirmation={getConfirmation()}
        forceRefresh={!supportsHistory}
        keyLength={10}>
        <MainRouteCentral/>
    </BrowserRouter>,
    document.getElementById('container')
);

/*
ReactDOM.render(
    <HashRouter>
        <MainRouteCentral/>
    </HashRouter>,
    document.getElementById('container')
);*/
