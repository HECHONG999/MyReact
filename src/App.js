import React, { } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import RootRouter from "./rootRouter";
import Link from "./BetterLink"


function App() {
  return (
    <Router>
      <nav>
        <Link to={{name:"home"}}>首页</Link>
        <Link to="/news">新闻页</Link>
      </nav>
      <div>
        <RootRouter/>
      </div>
    </Router>
  )
}

export default App;
