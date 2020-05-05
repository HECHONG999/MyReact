import React, { useState ,useEffect} from 'react';
import useReducer from "./useReducer"

/**
 * 该函数，根据当前的数据，和action类型如何去改变数据，生成一个新的数据返回
 * @param {*} state 改变的数据
 * @param {*} action 
 */
function reducer(state, action) {
  switch(action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      if(state == 0) {
        return 0;
      }
      return state - 1;
      default:
      return state
  }
} 
function App() { 
  const [state, dispatch] =  useReducer(reducer, 10)
  return (
     <div>
       <button onClick={ () => {
         dispatch({ type: "increase" })
       }}>+</button>
        <p>{state}</p>
        <button onClick={ () => {
          dispatch({ type: "decrease" })
        }}>-</button>
     </div>
    )
}

export default App;
