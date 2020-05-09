import React, { } from 'react';
import { BrowserRouter as Router, Route, Switch ,Link, NavLink,Redirect} from "react-router-dom"
// import Link from './Link'
import "./App.css"
function A() {
  return <div>A组件</div>
}

function B() {
  return <div>B组件</div>
}


function App() {
  return (
    <div>
      <Router>
              <NavLink to="/a" strict exact sensitive="true" activeClassName="selected" activeStyle={{background: "red"}}>去A页面</NavLink>
              <NavLink to="/b" activeClassName="selected" activeStyle={{background: "blue"}}>去B页面</NavLink>

              <Route path="/a/" component={A}/>
              <Route path="/b" component={B}/>

              <Redirect from="/b:id" to="/a:id"/>
              <Redirect from="/aaa/bbb:id" to="/bbb/ccc:id"/>

      </Router>
    </div>
  )
}

export default App;
