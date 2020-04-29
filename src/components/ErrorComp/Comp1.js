import React, { Component } from 'react'

export default class Comp1 extends Component {
    
    render() {
        throw Error("Comp1 错误")
        return (
            <div>
                我是Comp1
                {/* <button onClick={this.handleClick}>点击</button> */}
            </div>
        )
    }
}
