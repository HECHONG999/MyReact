import React, { useState } from 'react'

import { Transition, CSSTransition } from "react-transition-group";
import "./App.css"
let duration = 1000;


function Comp1(props) {
    // mountOnEnter属性: 子组件会根据父组件立即进行挂载, 如果父组件没挂载,子组件就不进行挂载
   return <CSSTransition   mountOnEnter  timeout={duration} in={props.visible}>
              <div className="title">
                <h1>Comp1</h1>
                <div>我是一个标题</div>
              </div>
    </CSSTransition>
}

function Comp2(props) {
    //mountOnEnter 只有in为 true时才挂载该组件  首次进入 enter时就挂载该
   return <CSSTransition appear  mountOnEnter  timeout={duration} in={props.visible}>
              <div className="title">
                    <h1>Comp2</h1>
                    <div>我是一个标题</div>
              </div>
    </CSSTransition>
}
export default function App() {
    
    let [inProp, setInProp] = useState(false);
    return (
        <div className="container">
           <div className="com-wrapper">
           <Comp1 visible={inProp}></Comp1>
            <Comp2 visible={!inProp}></Comp2>
           </div>
            <button onClick={() => {
                setInProp(!inProp)
            }}> Click to Toggle </button>
        </div>
    )
}
