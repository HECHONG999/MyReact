import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import "./App.css"
import { Transition } from "react-transition-group"
let duration = 3000;

export default function App() {
    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
      };
    let [inProp, setInProp] = useState(false);
    return (
        <div>
            {/* Transition只维护组件的状态 exited:已退出  enterd:已经进入  in为false，就不会挂载组件 mountOneEnter置有in为ttue时才挂载组件 unmountOnExit */}
            <Transition in={inProp} timeout={{
                                    appear: 500,
                                    enter: 3000,
                                    exit: 500,
                                }}
                addEndListener={(node, done) => {  //done()  立即变为结束转台
                    node.addEventListener("transitionend", () => {

                        console.log("过度动画结束了")
                    })
                }}
            >
                {state => {
                    console.log(state)
                    return <div style={ {...transitionStyles[state]}}>I'm a fade Transition!</div>
                }}
            </Transition>
            <button onClick={() => {
                setInProp(!inProp)
            }}> Click to Toggle </button>
        </div>
    )
}
