import React, { } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Amain from "./pages/Main";
import Login from "./pages/Login"




function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Amain}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
