// import {createStore, applyMiddleware, bindActionCreators} from "redux";
import {createStore, bindActionCreators, applyMiddleware} from "../redux/index"
import * as  loginUserAction from "./action/loginUserAction"
import * as user from "./action/users"
import reducer from "./reducer/index"


// store.dispatch(loginUserAction.setLoginUserAction({name: "何冲", age: 18, hobby: "basketball"}))
// store.dispatch(user.createAddUserAction({id: 3,name: "何冲", age: 18}))
let actionObj = {
    createAddUserAction: user.createAddUserAction,
    setLoginUserAction: loginUserAction.setLoginUserAction
}
const logger = store => {
    // 返回一个dispatch创建函数
    return (next)  => {
        console.log("logger    中间件运行了 ===", next)

        return (action) => {
            next(action)
        }
    }
}

const logger1 = store => {
    // 返回一个dispatch创建函数
    return (next)  => {
        console.log("logger1  dispatch中间件运行了 ===", next)
        // 返回一个dispatch函数
        return (action) => {
            console.log("logger1  中间件运行了 ===", action)
            console.log("next===", next)
            next(action)
        }
    }
}
const store = applyMiddleware(logger,logger1)(createStore)(reducer);
const action = bindActionCreators(actionObj, store.dispatch)
console.log(store)
action.createAddUserAction({id: 3,name: "何冲", age: 18})
console.log(store)































/**
 *  reducer 本质上是一个函数, 通过reducer改变数据
 * @param {*} state  store仓库中的数据 
 * @param {*} action  唯一描述改变数据的原因
 */
// function reducer(state, action) {
//     if(action.type == TypeActions.INCREASE) {
//         return state + 1
//     } else if( action.type == TypeActions.DECREASE) {
//         return state - 1
//     }  else if( action.type == TypeActions.SET) {
//         return  action.payload()
//     }
//     return state;
// }

// const store = createStore(reducer, 11);

//第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch函数
//得到一个新的对象，新对象中的属性名与第一个参数的属性名一致
// const bindActions = bindActionCreators(NumberActions, store.dispatch);

// console.log(store.getState())
//得到一个increase action，并直接分发到仓库,调用reducer 改变数据状态
// bindActions.getIncreaseAction()

// console.log(store.getState())

