import React, { } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from "react-router-dom"
import Home from "./Home";
import Login from "./Login";
import Personal from "./Personal"


import ProtechedRoute from "./ProtechedRoute"
function App() {
  return (
    <Router>
      <div>
        <Link to="/" > 首页</Link>
        <Link to="/login" >登录页</Link>
        <Link to="/personal">个人中心</Link>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtechedRoute path="/personal" component={Personal}   />
        {/* Route的render属性,值为一个函数，该函数的返回值为Route的展示组件 */}
        {/* <Route path="/personal" component={Personal} render={ () => {
          return <h2>Render</h2>
        }} /> */}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App;
