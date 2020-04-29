import React, { Component } from 'react'


export default class ErrorComponent extends Component {
    state =  {
        hasError: false
    }
    
    // 该生命周期函数会再子组件发生错误之后,页面更新之前调用
   static  getDerivedStateFromError(error) {
        console.log(error, "ErrorComponent");
        console.log("错误发生了");
        return {
            hasError: true
        }
    }

    componentDidCatch () {
        console.log("componentDidCatch ");
    }

    render() {
        console.log(this.state.hasError, "+++++++")
       if(this.state.hasError) {
           return <h1>发生了错误</h1>
       }
     
       console.log(this.props.children)
       return this.props.children
    }
}
