# learn-ReactRouter4.0（2017.12.12结束，2018.03.29重新回顾总结）
这是我的React Router4.0的学习过程。
（  工具：PhpStorm；
    来源：https://react-guide.github.io/react-router-cn/    ；
    需要学习React的请至官网学习，非常有效率，附上中文官网：https://doc.react-china.org/    ；
    学习路线：_React=》npm=》javascript打包工具（主要以webpack和gulp为主）=》ES6=》React-Routing=》Flux（Redux）_；
 ）

****一、认识管理工具****

1.安装webpack（包管理工具，具体的API请移步官方中文文档谢谢：https://doc.webpack-china.org/    ）
    
    a.npm i --save-dev webpack
    b.新建webpack.config.js文件
    c.写入文件内容（在webpack.config.js有模版）

2.安装es6支持工具
    
    a.npm i --save-dev babel-core babel-loader babel-preset-es2015
    b.写入.babelrc文件（注意语法）

3.写入测试文件
    
    a. ./src/es6test/app.js, ./src/es6test/es6test1.js es6test2.js(有模板)
    b. 执行编译命令：webpack
    
4.快速生成html（这个是插件，有一大堆坑，之后会补上）

    a.npm i html-webpack-plugin --save-dev
    b.在webpack.config.js中添加快速生成html文件的插件语句,具体参考模版内使用。
    
5.安装webpack服务器

    a.npm i webpack-dev-server --save-dev
    b.在webpack.config.js中添加语句，具体参考模板内使用。    

6.直接使用和webpack命令编译之后打开文件

    a.先npm install 安装所有的module（a b选择一个执行即可）
    b.之后直接在命令行输入npm start的话会自动执行编译，然后在浏览器中按照配置的端口devServer下的port打开网页
     （这步不会产生文件，而是直接可以在网页中看到效果，然后直接修改源文件后刷新页面也可以看到效果）    
    c.使用webpack命令编译文件，然后最终编译的文件会按照webpack.config.js文件的配置输出文件
     （按照我的配置是在顶层文件夹下的build文件夹中输出）
     
     
****二、上传本地代码至github****

1.安装git
（废话不多说网址：https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137396287703354d8c6c01c904c7d9ff056ae23da865a000
）

2.在项目顶层文件夹中打开git Bash（安装完git后右键有）：

    a. 建立包管理仓库  命令：git init
    
    b. 先向暂存区添加文件 命令：git add .(如果文件名字过长或者文件太大会有问题，在之后的坑中补充)
       再从暂存区向版本库中添加 命令：git commit -m "注释语句"
       
    c. github上创建自己库的repositiry（不会的用chrome浏览器最新版打开，然后使用自带的翻译系统）
       然后拿到自己库的https（地址栏或者别的可以找到的地方）
       
    d. 本地库关联到github上
       命令：git remote add origin https://自己的地址栏（上一步拿的）
       
    e. 上传之前先pull一下
       命令：git pull origin master
       
    f. 然后上传到github中
       命令：git push -u origin master
       如果出现帐号密码请输入自己的github帐号密码
    
    g. 之后在使用时候麻烦按顺序执行：a b e f
       除此之外还有一些必要的命令也可以在上面的地址中找到，这里不做赘述！  
3.坑 

    a. 添加需要忽略的文件/文件夹
       方法（直说一种最简单的）：打开git Bash=》命令行模式下输入之后回车：vim .gitignore=》
       编辑：一行一条
       eg：忽略*.a和*.b文件=》*.[ab];
           xx.a文件除外（即该文件不忽略）=》！xx.a;
           忽略xx目录=》xx/
                 
    b. 上传文件/git add . 报错filename too lang
       解决： git config [--global] core.longpaths true
       
    c. 警告：git warn：LF will be replace by CRLF in 。。。
       解决： git config [--global] core.autocrlf false
    
**三、demo（例子）**
 
1.使用demo
在看完之前的一和二之后按照demo里面的readme.md文件修改webpack.config.js的文件内容即可 

2.本demo所有例子全部来自中文官方文档（小浮动改动，以适配在学习在官方文档中学习过的React）
PS：附上中文官方文档：a.http://react-guide.github.io/react-router-cn/ （4.x之前的）
                      b.http://618cj.com/react-router4-0%E8%B7%AF%E7%94%B1%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3api/ （4.x的）

3.阅读代码

    a.代码中出现：/**/  标识符则为大段代码（整个主要例子）的解释说明
    b.代码中出现：//  标识符则为小段代码（该步骤做了什么）的解释说明
    c.代码中说明出现第x部分的代码示例则该部分为一整个部分（可以毙掉然后使用当前文件下的其他部分） 
       
       
       
       
       
       
