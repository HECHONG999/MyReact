import React, { useState } from 'react'
import { CSSTransition } from "react-transition-group";
import "./App.css";
import "animate.css";
let duration = 800;

function MyTransition(props) {
    console.log(props)
    return <CSSTransition 
                    appear mountOnEnter 
                    timeout={duration} 
                    in={props.visible}
                    classNames={{  // animate使用: 在需要进行动画的元素上设置animate-animated类名
                        exitActive: "animate__bounceOutLeft animate__animated",
                        exitDone: "exit-done",
                        enterActive: "animate__backInRight animate__animated",
                        appearActive: "animate__backInRight animate__animated"
                    }}
                    >
        {props.children}
    </CSSTransition>
}
function Comp1() {
    return <div className="title animate__fast">
        <h1>Comp1</h1>
        <div>我是一个标题</div>
    </div>
}

function Comp2() {
     return <div className="titleanimate__fast">
        <h1>Comp2</h1>
        <div>我是一个标题</div>
    </div>

}
export default function App() {

    let [inProp, setInProp] = useState(false);
    return (
        <div className="container">
            <div className="com-wrapper">
              <MyTransition visible={inProp}>
                  <Comp1/>
              </MyTransition>
              <MyTransition visible={!inProp}>
                  <Comp2/>
              </MyTransition>
            </div>
            <button onClick={() => {
                setInProp(!inProp)
            }}> Click to Toggle </button>
        </div>
    )
}
