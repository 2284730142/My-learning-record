这一篇开始对iScroll进行基础设置，这里的设置是有关于下拉时弹动（bounce）的参数

然后补充下iScroll中的一些高级参数（这些选项主要针对核心开发人员）：

    a.options.bindToWrapper
      move事件通常绑定到文档而不是滚动器容器（wrapper）。当你在滚动器容器（wrapper）外移动光标/手指，滚动条将不断滚动。这通常是你想要的,但是你也可以绑定事件转移到滚动器容器（wrapper）本身。这样做一旦指针离开了容器，滚动就会停止。
      Default: false 默认值：false
    
    b.options.bounceEasing
      擦除功能在弹跳动画过程中执行。有效的值为：'quadratic', 'circular', 'back', 'bounce', 'elastic'. 
      注意：bounce 和 elastic这两种方式不能被CSS转场执行。
      Default: 'circular' 默认值：'circular'
    
    c.options.bounceTime
      弹跳动画的持续时间，使用毫秒级。
      默认值：600
    
    d.options.deceleration
      这个值可以改变改变动画的势头持续时间/速度。更高的数字使动画更短。你可以从0.01开始去体验，这个值和基本的值比较，基本上没有动能。
      默认值：0.0006
    
    e.options.mouseWheelSpeed
      设置鼠标滚轮滚动的速度值。
      默认值：20
      
    f.options.preventDefaultException
      调用preventDefault()方法时所有的异常将被触发，尽管preventDefault设置了值。
      这是一个强大的选项，如果你想为所有包含formfield样式名称的元素上应用preventDefault()方法，你可以设置为下面的值：
      preventDefaultException: { className: /(^|\s)formfield(\s|$)/ }
      默认值：{ tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }.
    
    g.options.resizePolling
      当你改变窗口的大小iScroll重新计算元素的位置和尺寸。这可能是一个相当艰巨的任务。轮询设置为60毫秒。
      通过降低这个值你获得更好的视觉效果，但会占用更多的CPU资源。默认值是一个很好的折中。
      默认值：60


    