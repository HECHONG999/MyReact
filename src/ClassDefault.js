import React, { Component } from 'react'

export default class ClassDefault extends Component {
    // 类组件的默认赋值, 在组件加载完成时就已经进行属性默认赋值的混合。
    static defaultProps = {
        name: " 何冲 ~~~ 帅",
        age: 18
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.age}</h1>
            </div>
        )
    }
}
