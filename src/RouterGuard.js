import React, { Component } from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

let preLocation, location, action, unBlock
/**
 * _GroupHelper组件需要用widthRouter组件进行保证, 把Router的上下文(history、location等)传给_GroupHelper
 */
class _GroupHelper extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 阻塞函数: 获取新的location 
        unBlock =  this.props.history.block( ( newLocation, act) => { // 跳转到新组件的路径 跳转的方式
           preLocation = this.props.location;
           location = newLocation;
           action = act;
           console.log("阻塞函数")
            return "我是阻塞函数返回的消息"
        })
        this.listen = this.props.history.listen( (location, action) => {
            const preLocation = this.props.location;   // 获取到之前组件的location
            this.props.onChange && this.props.onChange(preLocation, location, action);  // 调用RouterGuard的onChange方法
        }) 
    }

    componentWillUnmount() {
        unBlock();   // 取消阻塞
        this.listen()  // 取消监听
    }
    
    render () {
        return  null
    }
}

const GroupHelper = withRouter(_GroupHelper);  // 利用withRouter封装,给_GroupHelper传入上下文的数据

/**
 * 该组件做守备路由
 */
export default class RouterGuard extends Component {
    // 参数一:阻塞消息
    // 1、字符串
    // 2、函数: 返回结果是一个字符串，表示阻塞的消息
    //    参数一: location
    //    参数二: action  跳转url的类
    // 参数二 回调函数，调用该函数并传递true，则表示进入到新页面，否则，不做任何操作
    handleConfirm = (msg, commitCallBack) => {
        // 通过调用beForeChange方法,导出commitCallBack放,进行路由守备判断
       
        // 首先要判断是否存在onBeforeChange
        if(this.props.onBeforeChange) {
            this.props.onBeforeChange && this.props.onBeforeChange(preLocation,location, action, commitCallBack,unBlock)
        } else { 
            commitCallBack(true);   // 如果不进路由守备直接, 提交跳转组件
        }
    }
    render() {
        return (
            <Router getUserConfirmation={ this.handleConfirm}>
                <GroupHelper onChange={this.props.onChange}> </GroupHelper>
                {this.props.children}
            </Router>
        )
    }
}
