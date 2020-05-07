import React, { useState, } from 'react';
import { HashRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom"


// function A() {
//   return <h1>组件A</h1>
// }

// function B() {
//   return <h1>组件B</h1>
// }


// function App() {

//   return (
//     /**
//      * 属性: 
//      * 1、exact 组件进行精确匹配,只有path路径绝对相等时才会进行匹配展示
//      * 组件:
//      * 1、Switch：严格匹配一旦匹配到一个组件，后续的组件将不在进行匹配
//      * 
//      * Route组件内存在一个函数,并且返回一个React对象, UI渲染一定会进行渲染展示到页面, 一旦成功渲染,其他路由组件将不会再进行匹配渲染
//      */
//     <Router>
//       <Switch>
//         <Route path="/a" component={A}></Route>
//         <Route path="/a" component={B}></Route>
//       </Switch>
//     </Router>
//   )
// }

// export default App;

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleString()}</h2>
      </div>
    );
  }
}