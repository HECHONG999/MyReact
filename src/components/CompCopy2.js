import React, { Component } from 'react'

export default class CompCopy2 extends Component {

    getRef = (el) => {  // el就为当前getRef所在的dom对象或类组件
        // 该函数会在render渲染被立即调用
        console.log("函数被调用了",el)
        this.txt = el;  // txt就是el所在的dom对象或者类组件实例所保存的名字
    }

    handleClick = () => {
        this.txt.focus()
        console.log(this)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.getRef}/>
                <button onClick={this.handleClick}>提交</button>
            </div>
        )
    }
}
