#生命周期
1.基本内容

init（出生前）li1

    // 针对一个类而言，而非实例
    defaultProps(share) -> run `1次` getDefaultProps(){return {group:123}}->Reacr.createClass()
    readonly
    
    // 针对一个类而言 只调用一次，针对实例，会有多次
    state -> getInitialState(){return {}}/ES6 constructor(){this.state={}}
          -> new Item()
          private write
          
          
mount（出生后）li2

    componentWillMount run `1次`
        state
        
    componentDidMount run `1次`
        dom
        other framework
        ajax server data    

update n （成长期）li3

    will
    did
    props修改

unmount （死亡）li4

    componentWillUnmount
    
    
2.说明：每个li文件下的是每次进阶的生命周期函数（钩子）的调用，zong文件夹下是一个小例子，在注释中有详细信息


















