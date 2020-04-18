import React, { Component } from 'react'

export default class CompCopy1 extends Component {
    // ref使用对象的调用方法

    constructor (props) {
        super(props);
        
        // 调用一个createRef函数, 创建一个ref对象
        this.txt = React.createRef()
    }
    handleClick = () => {
        console.log(this)
        this.txt.current.focus()
    }


    render() {
        return ( 
            <div>
                <input type="text" ref={this.txt} />
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        )
    }
}
