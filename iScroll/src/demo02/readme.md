官方说明（这一篇以及html是对引用的事件进行说明与简介如何进行iScroll操作）

本demo中用到了个事件监听：Passive event listeners，那么它是什么？它到底有什么用？

    1.Passive event listeners是2016年Google I/O 上同 PWA 概念一起被提出，但是同PWA不同，Passive event listeners 
      的作用很简单，如果用简单一句话来解释就是：提升页面滑动的流畅度。
    
    2.传统的addEventListener在页面中做监听事件：target.addEventListener(type, listener[, useCapture]);
      但是现在MDN文档中提供了这样的方式:
                target.addEventListener(type, listener[, options]);
                target.addEventListener(type, listener[, useCapture]);
                target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only
                  
    3.通过事件捕获和冒泡模型：如果我们为每一层的元素都绑定事件，那么在事件冒泡过程中，最底层的元素会最先响应事件，然后依次向父元素（上一层）冒泡。
      在事件处理函数中，会传递 Event 对象作为事件处理函数的参数，而这个参数最常用的 2 个方法就是;
                event.preventDefault();  // 阻止事件继续传播
                event.stopPropagation(); // 取消事件的默认行为
      在移动网页中，我们经常使用的就是 touch 系列的事件，如：
                touchstart
                touchmove
                touchend
                touchcancel
    
    4.然后分析一下事件的执行流程：
        a.如果我们在事件处理函数中调用了 stopPropagation()，那么之后的元素就无法接收这个事件，也即是剩余的事件处理函数永远不会得到执行。所以如果你不是非要那么做，请千万不要调用这个方法，否者你或者你的合作开发者会发现奇奇怪怪的Bug。
        b.如果我们在事件处理函数中调用了 preventDefault()，那么元素的默认行为就会被取消。举个例子来说明：一个 a 标签绑其 click 事件的默认行为是跳转到 href 指定的链接，但是如果我们在click事件处理函数里面调用了 preventDefault 方法后，其默认的的行为就被取消了。
    
    5.最后说一下移动端列表滚动的性能点：如果我们在 touchstart 事件调用 preventDefault 那么整个列表的滚动就会被取消，我们会惊奇的发现我们的页面瘫痪了（所以在移动端，你不仅不能轻易使用 stopPropagation， 在可滚动元素的 touch 事件处理函数中，你使用 preventDefault 方法时也需要格外小心才行）。
      那么问题来了：由于浏览器无法预先知道一个事件处理函数中会不会调用 preventDefault()，它需要等到事件处理函数执行完后，才能去执行默认行为，然而事件处理函数执行是要耗时的，这样一来就会导致页面卡顿，可以动手试试，比如在事件处理函数里面写一个耗时的循环试试，卡的你不要不要的
      （如果设置了css样式：-webkit-overflow-scrolling : touch; 在版本稍高一点的Chrome可能会为了优化性能而忽略 preventDefault 的调用，这也是一个可能的优化点哈）       
      
    6.总结以上几点：passive 就是为此而生的。在 WICG 的 demo 中提到，即使滚动事件里面写一个死循环，浏览器也能够正常处理页面的滑动。  