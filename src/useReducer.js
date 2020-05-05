import {useState} from 'react'

export default function useReducer(reducer, initialState, initFunc) {
    const [state, setState] = useState(initFunc ? initFunc(initialState) : initialState);
    function dispatch(action) {
       const newState =  reducer(state, action);
       console.log("日志："+ state + "----->" + newState )
       setState(newState);
    }
    return [state, dispatch]
}
