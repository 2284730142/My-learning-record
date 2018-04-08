本篇为分滚动条用户自定义设置

补充：滚动条样式

1.如果你不喜欢默认的滚动条样式，而且你认为你可以做的更好，你可以自定义滚动条样式。第一步就是设置选项scrollbars的值为'custom'：
        
        var myScroll = new IScroll('#wrapper', {
            scrollbars: 'custom'
        });
        
2.使用下面的CSS类可以简单的改变滚动条样式。

        a. .iScrollHorizontalScrollbar，这个样式应用到横向滚动条的容器。这个元素实际上承载了滚动条指示器。
        b. .iScrollVerticalScrollbar，和上面的样式类似，只不过适用于纵向滚动条容器。
        c. .iScrollIndicator，真正的滚动条指示器。
        d. .iScrollBothScrollbars，这个样式将在双向滚动条显示的情况下被加载到容器元素上。通常情况下其中一个（横向或者纵向）是可见的        
        
        
        