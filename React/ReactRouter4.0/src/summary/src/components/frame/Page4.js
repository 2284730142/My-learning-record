import React from 'react';
import {Prompt} from 'react-router-dom';

export default class Page4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prompt: false
        };
    }

    changePrompt() {
        this.setState({prompt: !this.state.prompt});
    }

    render() {
        return (
            <div className={'page4'}>
                {/*Prompt:当用户离开当前页面前做出一些提示。
                message: string
                当用户离开当前页面时，设置的提示信息。
                message: func
                当用户离开当前页面时，设置的回掉函数
                when: bool
                通过设置一定条件要决定是否启用 Prompt*/}
                <Prompt when={!this.state.prompt}
                        message={location => {
                            console.log(location);
                            return `你要离开么?`;
                        }}
                />
                Page4
                <button
                    onClick={this.changePrompt.bind(this)}>{this.state.prompt ? 'add Prompt' : 'cancel Prompt'}</button>
            </div>
        )
    }
}