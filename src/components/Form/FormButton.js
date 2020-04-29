import React, { Component } from 'react'
import ctx from "./getContext"
export default class FormButton extends Component {
    // 引入上下文对象,就可以通过this.context.xxx获取数据
    static contextType = ctx
    render() {
        return (
            <div>
                <button onClick={() => {
                    console.log(this.context, "}}}}}}")
                    this.context.submit && this.context.submit()
                }}>提交</button>
            </div>
        )
    }
}
