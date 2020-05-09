import React from 'react'
import {withRouter} from "react-router-dom"
function Link(props) {
    console.log(props)
    return (
       <a href={props.to} onClick={ (e) => {
           console.log(props)
            e.preventDefault();  // 阻止a标签默认事件
            props.history.push(props.to);  // 这里怎么获取history对象呢 ===> withRouter: 传入一个函数组件返回一个新组件继承了Router的history等属性
       }}>{props.children}</a>
    )
}
export default  withRouter(Link)

