本篇内容为iScroll的核心使用

补充点，核心：

1.iScroll使用基于设备和浏览器性能的各种技术来进行滚动。通常不需要你来配置引擎，iScroll会为你选择最佳的方式。尽管如此，理解iScroll工作机制和了解如何去配置他们也是很重要的。

2.主要内容

        a.options.useTransform
          默认情况下引擎会使用CSStransform属性。如果现在还是2007年，那么可以设置这个属性为false，这就是说：引擎将使用top/left属性来进行滚动。
          这个属性在滚动器感知到Flash，iframe或者视频插件内容时会有用，但是需要注意：性能会有极大的损耗。
          默认值：true
        
        b.options.useTransition
          iScroll使用CSS transition来实现动画效果（动量和弹力）。如果设置为false，那么将使用requestAnimationFrame代替。
          在现在浏览器中这两者之间的差异并不明显。在老的设备上transitions执行得更好。           
          默认值：true
        
        c.options.HWCompositing
          这个选项尝试使用translateZ(0)来把滚动器附加到硬件层，以此来改变CSS属性。在移动设备上这将提高性能，但在有些情况下,你可能想要禁用它(特别是如果你有太多的元素和硬件性能跟不上)。
          默认值：true