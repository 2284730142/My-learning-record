# learn-ReactFamilyBucket（srart：2017/12/12）
学习如何编写入门react项目（这个和原博主的内容有些不一样，因为使用了react-router4.0来重新走一遍流程）

本学习过程来源于“一韬的React实验室”。有兴趣的请自行百度，这个是已经按照流程走完的东西。

一、项目搭建（食用前请至官网下载node 6.3以上版本，并且最好搭配webstorm食用）

A. 搭建数据库服务器

1. 创建项目目录，并进入项目目录

2. 项目目录下执行：npm install -g json-server （快速后台管理程序服务器）

3. 执行命令：npm install （这只是个练习，没必要填写那么认真，会敲回车就OK了！）

4. 新建/server（服务器端文件）目录

5. 新建/server/db.json（在server目录下创建db.json文件），作为服务器端的数据库文件

6. 在db.json中写下数据

        {
          "user": [
            {
              "id": 10000,
              "name": "一韬",
              "age": 25,
              "gender": "male"
            },
            {
              "id": 10001,
              "name": "张三",
              "age": 30,
              "gender": "female"
            }
          ],
          "book": [
            {
              "id": 10000,
              "name": "JavaScript从入门到精通",
              "price": 9990,
              "owner_id": 10000
            },
            {
              "id": 10001,
              "name": "Java从入门到放弃",
              "price": 1990,
              "owner_id": 10001
            }
          ]
        }
        
7. 在/server目录执行json-server db.json -w -p 3000，然后打开浏览器，访问网址http://localhost:3000（有点慢）

8. 搭建数据库服务器到这里就结束了，此时我们拥有了一套强大的数据接口（原博主话），如何使用可以自行：https://github.com/typicode/json-server#routes  至此处github官方网站上查看具体使用。

B.客户端搭建

1. 项目目录下执行：npm install -g roadhog（原博主话：这是一个快速且强大的react项目搭建工具）

2. 新建/src目录，存放客户端代码

3. 新建/public目录，存放项目静态文件

4. 新建/src/index.js 和 /public/index.html 两个文件，分别作为应用的入口文件和页面的入口文件

5. 执行：npm install --save react react-dom react-router-dom, 安装进本react依赖

6. 在/src/index.js中写入以下代码

        import React from 'react';
        import ReactDOM from 'react-dom';
        ReactDOM.render((
            <h2>Hello React</h2>
        ), document.getElementById('app'));

7. 在/public/index.html写入以下代码（webstorm中只需要输入!并按下tab建就可以快速完成一个html页面模板）

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Hello React</title>
        </head>
        <body>
        <!-- 这个div必须和index.js里的render方法里传入的第二个参数保持一致 -->
        <div id="app"></div>
        <!-- roadhog背后会把你的代码从入口文件开始打包成一个index.js文件 -->
        <script src="./index.js"></script>
        </body>
        </html>
        
8. 执行：roadhog server启动react应用，会自动打开http://localhost:8000，如果你看到页面里显示了”Hello React!”，说明你的项目搭建已经大功告成了~

9. 把这两个指令写入package.json的scripts中，来节约我们的脑细胞，然后，就可以执行：npm run server 和npm run dev

        "scripts": {
          "server": "cd server && json-server db.json -w -p 3000",
          "dev": "roadhog server"
        }
    
10.然后你就可以开始编写你的应用了！    