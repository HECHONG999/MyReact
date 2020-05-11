import React from 'react'
import routeConfig from "./routeConfig";
import {Route, Switch} from 'react-router-dom'

function getRoute(route, baseUrl) {
    if( !(route instanceof Array) ) {    // 如果不是数组,返回null 不展示组件
        return null
    }
    let routes =  route.map( (item, index) => {
        const {children, name, path, component:Component, ...rest} = item; // 解构item对象, 除去掉path、children、name属性
        let newPath = `${baseUrl}${path}`;
            newPath = newPath.replace(/\/\//,"/")
        return (
            <Route 
            key={index}
            {...rest} 
            path={newPath}
            render={ (values) => {  // render的返回值作为Route渲染的元素
                return  <Component {...values}> 
                        {getRoute(item.children, newPath)}
                </Component>
            }}
        ></Route>)
    })

    return <Switch>
            {routes}
    </Switch>
}
/**
 * 使用Route组件, 根据配置路径, 渲染顶级页面
 */
export default function RootRouter() {
    return (
        <>
            {/* 得到一组Route, 进行页面切换 */}
            {getRoute(routeConfig, "/")}
        </>
    )
}
