import React, { } from 'react';
import Main from "./pages/Main";
import Login from "./pages/Login"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          {/* / 根路由,如果没有匹配到自动向下匹配 */}
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
