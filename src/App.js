import React, { useState,useRef , useLayoutEffect} from 'react';
import {getAllStudent} from "./services/getAllStudent"




function App() { 
  const [n, setN] = useState(10)
  const testRef = useRef();
  const ulRef = useRef()
  useLayoutEffect(() => {

    testRef.current.innerText = Math.random().toFixed(3)
  })
  return (
     <div>
       <h1 ref={testRef}>{n}</h1>
        <ul ref={ulRef}></ul>
       <button onClick={ () => {
         setN(1000)
       }}>改变文本</button>
     </div>
    )
}

export default App;
