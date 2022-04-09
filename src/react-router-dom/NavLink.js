import React from 'react';
import Link  from './Link';
import ctx from "../react-router/RouterContext";
import matchPath from '../react-router/matchPath';
import {parsePath} from "history"

/**
 * NavLink: 作用 为匹配到的 路由添加一个 className 属性
 * 实现思路: 判断 to属性值: 为字符串 通过 history的 parsePath解析为一个 location对象，
 * 如果是location对象，则不改变，然后通过 matchPath 方法把当前 path 和 地址栏路由 path 进行匹配看是否ipei得上
 *  匹配上 返回带 className属性 否则直接返回Link
 * @param {*} props 
 * @returns 
 */
export default function NavLink(props) {
    let {
        activeCLass = 'active',
        exact = false,
        sensitive = false,
        strict = false,
        ...rest
    } = props
  return (
    <ctx.Consumer>
        {(value) => {
            let loc;
            if( typeof props.to === 'string') {
                loc = parsePath(props.to);
            }
            let result = matchPath(loc.pathname, value.location.pathname, {exact, sensitive, strict});
            if(result) {
                return <Link {...rest} className={activeCLass}></Link>
            }
            return <Link {...rest}></Link>
        }}
    </ctx.Consumer>
  )
}
