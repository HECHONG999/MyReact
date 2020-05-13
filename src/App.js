import React, { useState } from 'react'
import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import "animate.css";
import { v4 as uuidv4 } from 'uuid';
let duration = 3000;

export default function App() {

    let [taskList, setTasklist] = useState([
        { id: uuidv4(), task: "任务一" },
        { id: uuidv4(), task: "任务二" }
    ]);

    return (
        <div className="container">
            <TransitionGroup>
                {
                    taskList.map(item => (

                        <CSSTransition  key={item.id} timeout={1000}>
                            <div> 
                                <div>
                                <div>{item.task}</div>
                                <button onClick={ () => {
                                    setTasklist(taskList.filter( it => it.id !== item.id))
                                }}>删除</button>
                                </div>
                                <div>
                                    <button onClick={ () => {
                                       var  name =  window.prompt("请添加一个学生")
                                       console.log(name)
                                       if(name == null) { return }
                                       setTasklist([...taskList, {task: name, id: uuidv4()}])
                                    }}>添加Task</button>
                                </div>
                            
                            </div>
                        </CSSTransition>

                      
                    ))
                }
            </TransitionGroup>
        </div>
    )
}

