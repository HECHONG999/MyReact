import React from 'react';
import ctx from "../react-router/RouterContext";
import {parsePath} from "history"

/**
 * 处理 props的to属性
 * 实现思路: 把传入的 to属性的值, 判断是 字符串还是 对象，是字符串直接转化为 location对象,是location对象,
 * 使用上下文的消费者，获取上下文中的 history对象, 通过push方法 把location对象传入, 来实现跳转页面
 * @param {*} props 
 * @returns 
 */
export default function Link(props) {
    let {to, ...rest} = props;

  return (
      <ctx.Consumer>
          {value => {
              let loc;
              if(typeof props.to === 'string') {
                  loc = parsePath(props.to)
              }else if(typeof props.to === 'object') {
                loc = props.to
              }else {
                  throw TypeError("to property is must string or object  ")
              }
             let href =  value.history.createHref(loc);
            return <a {...rest} href={href} onClick={(e) => {
                e.preventDefault()
                value.history.push(loc)
            }}>{props.children}</a>
          }}
      </ctx.Consumer>
  )
}
