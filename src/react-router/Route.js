/**
 * 用于匹配路由，并将匹配的结果放在上下文中，规则如下:
    path：路径规则，可以是字符串，可以是字符串数组
    children：无论是否匹配，都应该渲染的子元素
    render：匹配成功后，渲染函数
    component：匹配成功后，渲染的组件

    以下是调用matchPath方法时的配置
    exact
    strict
    sensitive
 */

import React, { Component } from "react";
import matchPath from "./matchPath";
import ctx from "./RouterContext"

export default class Route extends Component{

    renderChildren(ctx) {
        let {children, component, render} = this.props;
        // 有children的情况，无论是否匹配 都要渲染 children
        if(children !== undefined && children !== null) {
            if(typeof children === 'function') {
                return children(ctx);  // 如果children是一个函数，则把上下文对象通过props传进去
            }else {
                return children;
            }
        }
        // 如果没有匹配成功，则不进行渲染
        if(!ctx.match) {
            return null;
        }
        if(typeof render === 'function') {
            return render(ctx);
        }
        // 只有component有值,
        if(component) {
           const Component = component;
           // 把上下文当作属性 传递给组件
           return <Component {...ctx}/>
        }
        return null;
    }
    /**
     * g根据location的pathname， 匹配路由
     * @param {*} location 
     * @returns 
     */
    matchRoute(location) {
        const {exact = false, strict = false, senstive = false} = this.props;
        return matchPath(this.props.path || '/',location.pathname, {
            exact,
            strict,
            senstive
        })
    }
    /**
     * 上下文中的消费者函数，使用通过 ctx.Provider 传过来的 value 上下文，
     * 根据上下文中的 location 函数，匹配对于的路由。
     * @param {*} value 
     * @returns 
     */
    consumerFun = (value)=> {
        console.log(value)
        const ctxValue = {
            history: value.history,
            location: value.location,
            match: this.matchRoute(value.location) 
        }
        // 再次创建上下文 提供给组件 上下文对象
        return <ctx.Provider value={ctxValue}>  
            {this.renderChildren(ctxValue)}
        </ctx.Provider>
    }
    render () {
        return (
            <ctx.Consumer>
                {
                   this.consumerFun
                }
            </ctx.Consumer>
        )
    }
}