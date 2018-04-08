**一、使用方案（请先看步骤3再操作）**

1.修改入口entry下page属性值为：path.resolve('./src/demo01/app.js')

2.修改输入output下的path属性值为：path.resolve('./build/demo01')

3.执行：

    a.npm start执行只要修改1条件即可
    b.webpack编译之后直接打开请按顺序执行1&2两个条件之后在build底下可以找到文件
    （PS：完整下载的人可以直接从build文件夹下找到对应已编译好的，也可以删除掉build文件夹自己重新编译）
**二、代码说明（当前demo为react-router的不使用和使用情况，以及使用下如何获取参数）**

1.第一部分代码说明：
当 URL 的 hash 部分（指的是 # 后的部分）变化后，<App> 会根据 this.state.route 来渲染不同的 <Child>。
看起来很直接，但它很快就会变得复杂起来。为了让我们的 URL 解析变得更智能，我们需要编写很多代码来实现指定 URL 应该渲染哪一个嵌套的 UI 组件分支：App -> About, App -> Inbox -> Messages -> Message, App -> Inbox -> Messages -> Stats，等等。

2.第二部分代码说明：
React Router 知道如何为我们搭建嵌套的 UI，因此我们不用手动找出需要渲染哪些 <Child> 组件。举个例子，对于一个完整的 /about 路径，React Router 会搭建出 <App><About /></App>。
在内部，router 会将你树级嵌套格式的 <Route> 转变成路由配置。
嵌套方式请按照示例来写，当中还写了如何获取参数等等信息

3.知识补充*

**路由的匹配原理**

    a.嵌套关系：React Router 使用路由嵌套的概念来让你定义 view 的嵌套集合，当一个给定的 URL 被调用时，整个集合中（命中的部分）都会被渲染。
      嵌套路由被描述成一种树形结构。React Router 会深度优先遍历整个路由配置来寻找一个与给定的 URL 相匹配的路由。
    
    b.路径语法：路由路径是匹配一个（或一部分）URL 的 一个字符串模式。大部分的路由路径都可以直接按照字面量理解，除了以下几个特殊的符号：
      i.  :paramName – 匹配一段位于 /、? 或 # 之后的 URL。 命中的部分将被作为一个参数
          <Route path="/hello/:name">         // 匹配 /hello/michael 和 /hello/ryan
      ii. () – 在它内部的内容被认为是可选的
          <Route path="/hello(/:name)">       // 匹配 /hello, /hello/michael 和 /hello/ryan
      iii.* – 匹配任意字符（非贪婪的）直到命中下一个字符或者整个 URL 的末尾，并创建一个 splat 参数
          <Route path="/files/*.*">           // 匹配 /files/hello.jpg 和 /files/path/to/hello.jpg
    
    c.优先级：最后，路由算法会根据定义的顺序自顶向下匹配路由。
      因此，当你拥有两个兄弟路由节点配置时，你必须确认前一个路由不会匹配后一个路由中的路径。