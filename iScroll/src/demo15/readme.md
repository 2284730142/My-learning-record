本篇为滚动条的设置

基本知识补充：

滚动条不只是像名字所表达的意义一样，在内部它们是作为indicators的引用。一个指示器侦听滚动条的位置并且现实它在全局中的位置，但是它可以做更多的事情。先从最基本的开始。


1.基本参数：

        a.options.scrollbars
        正如我们在基本功能介绍中提到的，激活滚动条只需要做一件事情，这件事情就是：
        var myScroll = new IScroll('#wrapper', {
            scrollbars: true
        });
        当然这个默认的行为是可以定制的。
        
        b.options.fadeScrollbars
        不想使用滚动条淡入淡出方式时，需要设置此属性为false以便节省资源。
        默认值：false
        
        c.options.interactiveScrollbars
        此属性可以让滚动条能拖动，用户可以与之交互。
        默认值：false
        
        d.options.resizeScrollbars
        滚动条尺寸改变基于容器和滚动区域的宽/高之间的比例。此属性设置为false让滚动条固定大小。这可能有助于自定义滚动条样式（参考下面）。
        默认值：true
        
        e.options.shrinkScrollbars
        当在滚动区域外面滚动时滚动条是否可以收缩到较小的尺寸。
        有效的值为：'clip' 和 'scale'。
        'clip'是移动指示器到它容器的外面，效果就是滚动条收缩起来，简单的移动到屏幕以外的区域。属性设置为此值后将大大的提升整个iScroll的性能。
        值'scale'关闭属性useTransition，之后所有的动画效果将使用requestAnimationFrame实现。指示器实际上有各种尺寸，并且最终的效果最好。
        默认值：false
        
2.滚动条样式将在后续demo中列出 






