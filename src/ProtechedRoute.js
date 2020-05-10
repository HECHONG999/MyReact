import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import loginInfo from "./isLogin"

/**
 * 保护个人中心页: 需要进行授权后才能进行访问
 * 1、如果没有登录授权,则跳转到登录页进行登录,登录完后跳转到个人中心页
 * @param {*} param0 
 */
export default function ProtechedRoute({component:Component, render, child, ...rest}) {
    return (
        <Route {...rest} render={ (values) => {
            console.log(values)
            if(loginInfo.isLogin) {
                return <Component/>
            } else {  // 如果没有登录就跳转到login页进行登录
                // to也可以是对象: {pathname: "目标跳转的路径",search:"?后的url参数"}
                // search: 参数拼接在?后面的, 暴露在url地址上
               return <Redirect to={{
                   pathname:"/login",
                   // search:"?returnUrl="+values.location.pathname
                   state: values.location.pathname
               }} />
            }
        }}></Route>
    )
}
