**一、使用方案（请先看步骤3再操作）**

1.修改入口entry下page属性值为：path.resolve('./src/demo02/app.js')。

2.修改输入output下的path属性值为：path.resolve('./build/demo02')。

3.执行：

    a.npm start执行只要修改1条件即可。
    b.webpack编译之后直接打开请按顺序执行1&2两个条件之后在build底下可以找到文件。
    （PS：完整下载的人可以直接从build文件夹下找到对应已编译好的，也可以删除掉build文件夹自己重新编译）

**二、代码说明（当前demo为react-router的认证机制）**

1.整段代码说明：
通过在render中判断定义的某个状态使得拦截的机制得以实现，并且在判断状态完成之后进行重定向Redirect以实现。

2.有关于Router和Route组件的参数：

    a.Router：高级接口，可替代（下面之后用到在介绍）：
        <BrowserRouter>
        <HashRouter>
        <MemoryRouter>
        <NativeRouter>
        <StaticRouter>
        
    b.Router参数：
        history(object)：用于导航上的历史对象；
        children(node)：跟的是节点，渲染单个子元素，即react-router4.0的Router组件只接受一个子元素。
    
    c.Route：路由中最重要的组件，用于在某个位置与路由的路径匹配时呈现一些UI。
    
    d.Route的渲染方式（他们在不同情况下使用，你只能选择一个以及对应的参数来得到你要的路由，在此比较下不同处）：
    首先提一下共同渲染方式的参数：
            match：匹配对象包含关于<Route path>匹配URL的信息。
            location:代表应用程序的位置，您希望它在哪里，甚至在哪里。
            history：历史的会话信息
    然后是渲染方式：
        <Route component>方式：仅当位置匹配时才会呈现的响应组件。（相当于创建/引用组件）
        <Route render(function)>方式：直接渲染出一个组件，他的优先级低于component的形式，所以不要同时使用
        <Route children(function)>方式：直接渲染，优先级最低，用于匹配。

    e.Route其他参数：
        path(string)：用于解释任何匹配的URL路径，没有匹配的路由总是被匹配。
        exact(bool)：如果是true路径必须完全匹配
        strict(bool)：严格匹配模式

3.知识补充*

    a.首先说明下react-router4.0中去掉了路由钩子，所以按照官网提供的方案来说，在render里面做判断即可实现拦截。
    
    b.同时嵌套路由被取代掉了，即4.0以下可以进行路由的嵌套使用，但是现在不可以了，详情在demo01中的渲染时候的写法。
