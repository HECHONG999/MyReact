import React, { } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import qs from "query-string"

function A(props) {
  console.log(props.match)
  const querys = qs.parse(props.location.search)
  const hash = qs.parse(props.location.hash)
  console.log(querys)
  console.log(hash)
  return (
    <>
      <div>组件A</div>
      <div>
        <p>地址参数: {props.location.pathname}</p>
        <p>query: a: {querys.a} b：{querys.b}</p>
        <p>hash: c: {hash.c}</p>
      </div>
      <button onClick={() => {
        props.history.push("/b", "我是A传过来的数据")
      }}>跳转到B组件</button>
    </>
  )
}


function B(props) {
  console.log(props)
  return (
    <div>
      <h1>我是组件B</h1>
      <h1>获取状态数据： {props.location.state}</h1>
      <button onClick={() => {
        props.history.push("/a", "我是数据B")
      }}>跳转到A组件</button>
    </div>
  )
}

function NotFound() {
  return <h1>找不到页面</h1>
}
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/a" component={A}></Route>
          <Route path="/b" component={B}></Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
