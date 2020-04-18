import React, { Component } from 'react'

class A extends Component {
    method = () => {
        console.log("调用了A组件method方法")
    }

    render () {
        return (
            <p ref="domP" >A组件</p>
        )
    }
}

export default class Comp extends Component {

    handlClick = () => {
        console.log(this)
        console.log(this.refs);
        console.log(this.refs.oInput.focus())
        console.log(this.refs.CompA.method())
    }

    render() {
        return (
            <div>

                <input type="text" ref="oInput" name="" id=""/>
                <A ref="CompA"></A>
                <button onClick={this.handlClick}>聚焦</button>
            </div>
        )
    }
}
