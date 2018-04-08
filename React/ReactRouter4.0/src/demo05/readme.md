**一、使用方案（请先看步骤3再操作）**

1.修改入口entry下page属性值为：path.resolve('./src/demo05/app.js')。

2.修改输入output下的path属性值为：path.resolve('./build/demo05')。

3.执行：

    a.npm start执行只要修改1条件即可。
    b.webpack编译之后直接打开请按顺序执行1&2两个条件之后在build底下可以找到文件。
    （PS：完整下载的人可以直接从build文件夹下找到对应已编译好的，也可以删除掉build文件夹自己重新编译）

**二、代码说明（当前demo为react-router的未匹配进行404页面跳转）**

1.整段代码说明：
对路径匹配的一次说明以及如何进行匹配跳转（相当于对匹配不上的可以设置为404页面）

2.Redirect：渲染<Redirect>将导航到一个新位置。
新的位置将在历史堆栈覆盖当前位置，如服务器端重定向（HTTP 3xx）。

    参数：
    a.to(string):重定向的链接URL(直接是完整路径)。
    b.to(object):当前位置重定向。
    to={{
       pathname: '/login',
       search: '?utm=your+face',
       state: { referrer: currentLocation }
     }}
    c.push(bool):当值为TRUE时，重定向将推送一个新条目到历史上，而不是替换当前的条目。
    d.from(string):一个要经常重定向的路径来源，他能被用于在<Switch>中使用重定向。
    
3.Switch：渲染第一个匹配路径的子项或者重定向。
它与使用一系列的<Route>有什么不同：<Switch>下的匹配是唯一的，只显示一条对应的路由，而<Route>是只要匹配都会呈现
对于动画转换也是有用的，因为匹配的<路径>与前面的位置相同。
    




    