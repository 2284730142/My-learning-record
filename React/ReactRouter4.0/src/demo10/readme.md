**一、使用方案（请先看步骤3再操作）**

1.修改入口entry下page属性值为：path.resolve('./src/demo10/app.js')。

2.修改输入output下的path属性值为：path.resolve('./build/demo10')。

3.执行：

    a.npm start执行只要修改1条件即可。
    b.webpack编译之后直接打开请按顺序执行1&2两个条件之后在build底下可以找到文件。
    （PS：完整下载的人可以直接从build文件夹下找到对应已编译好的，也可以删除掉build文件夹自己重新编译）

**二、代码说明（当前demo为react-router的路由配置）**

1.整段代码说明：
以类的形式来进行路由信息配置，相当于把路由配置当成一个组件来使用，而这个组件可以调用其他的组件。






    