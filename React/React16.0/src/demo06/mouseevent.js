const data = new Map();
// 定义数据
data.set('id001', 'id001');
data.set('id002', 'id002');
data.set('id003', 'id003');
data.set('id004', 'id004');

const DND = React.createClass({
    getInitialState() {
        // 右边的设为初始值data从组建中传过来作为状态，左边值设为map形式的数据
        return {
            dragId: null,
            rightdata: this.props.data,
            leftdata: new Map()
        }
    },
    // 拖
    drag(e) {
        // 确定当前拖拽目标的id
        this.state.dragId = e.target.id;
    },
    // 放
    drop(e) {
        // 得到当前过来的数据值，然后修改数据
        const value = this.state.rightdata.get(this.state.dragId);
        this.state.leftdata.set(this.state.dragId, value);
        this.state.rightdata.delete(this.state.dragId);
        this.forceUpdate();
    },
    drop2(e) {
        // 左边值拖回去也是一样的
        const value = this.state.leftdata.get(this.state.dragId);
        this.state.rightdata.set(this.state.dragId, value);
        this.state.leftdata.delete(this.state.dragId);
        this.forceUpdate();
    },
    render() {
        // 一种遍历数据的形式
        const rightList = [];
        const leftList = [];

        for (let item of this.state.rightdata) {
            rightList.push(<p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>)
        }

        for (let item of this.state.leftdata) {
            leftList.push(<p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>)
        }
        // 记得e.preventDefault()
        return (
            <div>
                <div id="leftsection"
                     onDragEnter={e => e.preventDefault()}
                     onDragOver={e => e.preventDefault()}
                     onDrop={this.drop}
                >
                    {leftList}
                </div>
                <div id="rightsection"
                     onDragEnter={e => e.preventDefault()}
                     onDragOver={e => e.preventDefault()}
                     onDrop={this.drop2}
                >
                    {rightList}
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <DND data={data}/>
    , document.getElementById('test')
);