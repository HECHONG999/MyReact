import React, { } from 'react';
import { BrowserRouter as Router, Route, Switch ,Link, NavLink,Redirect} from "react-router-dom"

function User(props) {
  console.log(props)
  return <div>
      <h1>固定区域</h1>
        <p>
          <Link to="/user/info">用户信息</Link>
          <Link to="/user/pay">用户充值</Link>
        </p>
        <div 
            style={{
              width: 600,
              height: 500,
              border:"1px solid black"
            }}
        >
            <Route path="/user/info" component={UserInfo}/>
            <Route path="/user/pay" component={UserPay}/>
        </div>
  </div>
}


function UserInfo() {
  return <div>修改用户信息</div>
}

function UserPay() {
  return <div>用户充值</div>
}

function App() {
  return (
    <div>
      <Router>
          <Route path="/" component={User}/>
      </Router>
    </div>
  )
}

export default App;
