本篇为滚动条滚动到摸个位置的设置

补充IScroll5的API：

1.滚动：
        
        a.scrollTo(x, y, time, easing)
            滚动到：x，y，事件，easing方式        
            x:int        
            y:int        
            time:int        
            Easing: quadratic | circular | back | bounce | elastic
            见IScroll.utils.ease 对象
            例：
            myScroll.scrollTo(0, -100, 1000, IScroll.utils.ease.elastic);
        
        b.scrollBy(x, y, time, easing)
            滚动到相对于当前位置的某处            
            其余同上
        
        c.scrollToElement(el, time, offsetX, offsetY, easing)
            滚动到某个元素。el为必须的参数        
            offsetX/offsetY：相对于el元素的位移。设为true即为屏幕中心
        
2.分割页面snap:

        a.goToPage(x, y, time, easing)
            根据options.snap分割页面，跳转到横向、纵向某页。XY可以同时生效。        
            结合options.snap使用
        
        b.next()prev()
            上一页，下一页        
            结合options.snap使用

3.缩放:

        a.zoom(scale, x, y, time)
            缩放容器        
            Scale:缩放因子
        
4.刷新:
        
        a.refresh()
            刷新IScroll
        
5.销毁:
        
        a.destroy()
            销毁IScroll，节省资源

  
        