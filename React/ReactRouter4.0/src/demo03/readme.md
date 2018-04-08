**一、使用方案（请先看步骤3再操作）**

1.修改入口entry下page属性值为：path.resolve('./src/demo03/app.js')。

2.修改输入output下的path属性值为：path.resolve('./build/demo03')。

3.执行：

    a.npm start执行只要修改1条件即可。
    b.webpack编译之后直接打开请按顺序执行1&2两个条件之后在build底下可以找到文件。
    （PS：完整下载的人可以直接从build文件夹下找到对应已编译好的，也可以删除掉build文件夹自己重新编译）

**二、代码说明（当前demo为react-router的自定义链接）**

1.整段代码说明：
通过传递参数的形式来设置初始页面以及跳转的内容



    