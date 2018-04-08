**一、使用方案（请先看步骤3再操作）**

1.修改入口entry下page属性值为：path.resolve('./src/demo08/app.js')。

2.修改输入output下的path属性值为：path.resolve('./build/demo08')。

3.执行：

    a.npm start执行只要修改1条件即可。
    b.webpack编译之后直接打开请按顺序执行1&2两个条件之后在build底下可以找到文件。
    （PS：完整下载的人可以直接从build文件夹下找到对应已编译好的，也可以删除掉build文件夹自己重新编译）

**二、代码说明（当前demo为react-router的过度动画）**

1.整段代码说明：
用于页面改变时对某些部分进行渲染操作，使用react特定的组件使得功能更加便捷。
另外，使用类的静态属性来直接定义css样式，然后在渲染的组件中写入类的静态名字（相当于可以尝试进行样式的类的封装，而不用再使用css文件创建类来使用）。

2.（只提一下）react-addons-css-transition-grou包：
安装：npm install --save react-addons-css-transition-grou（使用过程中也会用到）
引入组件：import ReactCSSTransitionGroup from 'react-addons-css-transition-group'，使用起来还是很便捷的，
它也是react的组件之一。

3.NavLink组件：参数：

    a.activeClassName(String):它用于被激活时的样式名字添加。
    b.activeStyle(Object):同被激活时的样式添加，但是只能接受对象。
    c.exact(bool):当为真的时候，被激活的样式当且仅当在匹配成功时被支持。
    d.strict(bool):同Route的strict，在demo02下的readme中有写。
    f.isActive(function):添加额外逻辑以确定链接是否活动的函数。可如果你想做更多的验证链接的路径匹配当前URL的路径。





    