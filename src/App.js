import React, { useState } from 'react'
import { CSSTransition,SwitchTransition } from "react-transition-group";
import "./App.css";
import "animate.css";
let duration = 3000;

export default function App() {

    let [inProp, setInProp] = useState(false);
    return (
        <div className="container">
            <SwitchTransition mode="in-out" >
                    <CSSTransition key={inProp} appear in={inProp} timeout={duration} 
                                    classNames={{
                                        enter: "animate__animated bounceIn ",
                                        exit: "animate__animated bounceOut",
                                    }}
                        >
                            <h1 className="animated fast">{inProp ? "title1" : "title2"}</h1>
                    </CSSTransition>
                    
            </SwitchTransition>
            <button onClick={() => {
                setInProp(!inProp)
            }}> Click to Toggle </button>
        </div>
    )
}

