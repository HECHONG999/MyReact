import {createStore, applyMiddleware } from "redux";

// export 导出的不同的action 
import {createAddUserAction, fetchUsers} from "./action/users"
import { setLoginUserAction } from "./action/loginUserAction"
import reducer from "./reducer/index";
// import thunk from "redux-thunk";
import thunk from "../redux-thunk";
import promise from 'redux-promise'
import logger from "redux-logger"

const store = createStore(
    reducer,
     applyMiddleware(
         promise,
          logger
          )
          )

// store.dispatch(setLoginUserAction([{id: 997999, pwd: "hfhfossks"}]))
// store.dispatch(createAddUserAction({name:"何冲", age: 19, hobbit: "dancing"}))
// store.dispatch(createAddUserAction({name:"何冲111111", age: 19, hobbit: "dancing"}))
// store.dispatch(fetchUsers())

function asyncGetData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('成哥')
        }, 2000)
    })
}

function* task() {
    console.log("开始获取数据");
    const data = yield asyncGetData();  // 得到一个 promise对象
    debugger
    console.log('数据====', data)
}


function run(generatorFun) {
    const generator = generatorFun();
    next()
    /**
     * 执行 next, 递归调用 生成器函数，知道调用结束
     * @param {} nextValue 
     * @returns 
     */
    function next(nextValue) {
        const result = generator.next(nextValue);
        if(result.done) {
            return
        }
        let value = result.value; // 判断value的类型
        if(typeof value.then === 'function') {
            value.then(data => next(data))  // 把yield 异步请求的结果,赋值给 生成器里的 data
        }else {
            next(value)
        }
    }
}

run(task)

// let generator = task()
// let result = generator.next();
// result.value.then(res => {
//     generator.next(res);
// })
































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

