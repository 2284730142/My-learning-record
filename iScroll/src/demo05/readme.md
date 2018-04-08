这一篇有一些参数的基本设置，已经在index.html中进行部分说明

这里补充下指示器(indicators)的作用：
1.这是基本的代码配置

    var myScroll = new IScroll('#wrapper', {
        indicators: {
            el: [element|element selector]
            fade: false,
            ignoreBoundaries: false,
            interactive: false,
            listenX: true,
            listenY: true,
            resize: true,
            shrink: false,
            speedRatioX: 0,
            speedRatioY: 0,
        }
    });
    
2.配置介绍

    a.options.indicators.el
        这是一个强制性的参数，它保留了指向滚动条容器元素的引用。容器里的第一个子元素就是指示器。注意，滚动条可以在你的文档的任意地方，它不需要在滚动条包装器内。
    
    b.options.indicators.ignoreBoundaries
      这个属性是告诉指示器忽略它容器所带来的边界。当我们能改变滚动条速度的比率，在让滚动条滚动时这个属性很有用。比如你想让指示器是滚动条速度的两倍，指示器将很快到达它的结尾。这个属性被用在视差滚动。
      默认值：false
      
    c.options.indicators.listenX、options.indicators.listenY
      指示器的那一个轴（横向和纵向）被侦听。可以设置一个或者都设置
      默认值：true  
      
    d.options.indicators.speedRatioX、options.indicators.speedRatioY
      指示器移动的速度和主要滚动条大小的关系。默认情况下是设置为自动。你很少需要去改变这个值。
      默认值：0  
      
    e.options.indicators.fade、options.indicators.interactive、options.indicators.resize、options.indicators.shrink
      与滚动条差不多  
      
      
      
      
      
      
      
      
      
      
      
          