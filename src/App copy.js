import React, { useState } from 'react'

import { Transition, CSSTransition } from "react-transition-group";
import "./App.css"
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
           <CSSTransition appear timeout={duration} in={inProp}>
               <h1>我是一个标题</h1>
           </CSSTransition>
            <button onClick={() => {
                setInProp(!inProp)
            }}> Click to Toggle </button>
        </div>
    )
}
