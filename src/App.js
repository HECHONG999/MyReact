import React ,{Component} from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import RouterGuard from "./RouterGuard"


function PageA() {
    return (
        <h1>PageA</h1>
    )
}

function PageB() {
    return (
        <h1>PageB</h1>
    )
}

/**
 * 路由守备
 */
export default function App() {
    return (

        <RouterGuard onBeforeChange={ (prev, cur, action, commit, unBlock) => {  // commitCallBack(true) 表示可以通过路由守备
            // 判断的逻辑
            //该函数做判断是否守备路由
            commit(true);
            unBlock()


        }} onChange={ (preLocation, location, action) => {
            console.log(`日志: 从组件页面${preLocation.pathname} --->> 到组件页面 ${location.pathname} 跳转方式${action}`)
        }}>
            <nav>
                <Link to="/pageA">PageA</Link>
                <Link to="/pageB">PageB</Link>

            </nav>
            <div>
                <Route path="/pageA" component={PageA} />
                <Route path="/pageB" component={PageB} />
            </div>
        </RouterGuard>
    )
}
