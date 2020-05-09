import React, { } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import qs from "query-string"

function News(props) {
  console.log(props)
    return (
      <div>
             我是News
            <h1>年 {props.match.params.year} 月：{props.match.params.month} 日：{props.match.params.day}</h1>
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
          {/* match: 根据url匹配规则进行路由匹配, 把进行规则匹配？后的参数封装成对象存在params字段中 */}
          <Route path="/news/:year?/:month?/:day(\d+)" component={News}></Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
