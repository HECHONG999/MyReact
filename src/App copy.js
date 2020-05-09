import React, { } from 'react';
import { BrowserRouter as Router, Route, Switch ,Link} from "react-router-dom"
// import Link from './Link'

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
              {/* Link：做a标签跳转链接不同的组件不刷新页面 */}
              <Link to={{pathname:"/a", search:"name=hechong&age=18",hash:"bbb=123"}} >跳转到A组件</Link>
              <p></p>
              <Link to="/b" innerRef={ (node) => {
                  console.log(node)
              }} >跳转到B组件</Link>

              <Route path="/a" component={A}/>
              <Route path="/b" component={B}/>

      </Router>
    </div>
  )
}

export default App;
