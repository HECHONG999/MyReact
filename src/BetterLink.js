import React from 'react';
import routeConfig from "./routeConfig";
import {Link} from "react-router-dom";

/**
 * 根据Route的to, 如果是对象,就从routeConfig中获得name对象的path路径, 如果是string,直接拼接
 * @param {*} to
 */
export default function BetterLink({to, ...rest}) {  // 结构出to:{name: "???"}这个对象
    if(to.name && typeof to !== "string") {
        to.pathname = getPathFromName(to.name, "/", routeConfig);  // 更新to.pathname 进行跳转
        console.log(to)
    }
    return <Link {...rest} to={to}/>
}
/**
 * 根据name的值，查找对应的path，没有考虑有params的情况
 * 如果有，会比较复杂，需要用到第三方库path-to-regexp
 * @param {*} name 
 */
function getPathFromName(name, baseUrl, routeConfig) {
    for( const item of routeConfig) {
        let newPath = baseUrl + item.path;
            newPath = newPath.replace(/\/\//, "/");
            if(item.name == name) {                   //判断Link的name是item组件的name, 返回对应的path路径
                return newPath
            } else {
                let children = item.children;
                if(Array.isArray(children)) {
                  const path =  getPathFromName(name, newPath, children)
                  if( path != undefined ) {
                      return path
                  }
                }
            }
    }
}
