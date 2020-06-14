import {createStore, applyMiddleware} from "redux";
// import createStore from "../redux/createStore"
import * as  loginUserAction from "./action/loginUserAction"
import * as user from "./action/users"
import reducer from "./Reducer/index"


/**
 * 一个中间件函数
 * @param {*} store 
 */
function  logger1(store) {  // 得到仓库
    return function (nextDispatch) {   // 这里的nextDispatch 是后面logger2函数执行, 返回的dispatch函数， 保留原先的dispatch
         // 下面返回的函数，是最终要应用的dispatch函数, 最终会替换掉原先store中的dispatch
         // 如果有多个中间件，
         return function dispatch(action) {
             console.log("中间件1")
            console.log(" 中间件1 旧数据", store.getState());
            nextDispatch(action);
            console.log("中间件1 新数据", store.getState());
         }
    }
}


function  logger2(store) {
    return function (nextDispatch) {   // 这里的nextDispatch 是后面logger3函数执行, 返回的dispatch， 保留原先的dispatch
         // 下面返回的函数，是最终要应用的dispatch函数, 最终会替换掉原先store中的dispatch
         // 如果有多个中间件，
         return function dispatch(action) {
            console.log("中间件2");
            console.log("中间件2 旧数据", store.getState());
            nextDispatch(action);
            console.log("中间件2 新数据", store.getState());
         }
    }
}


/**
 * createStore 创建仓库
 * 参数一: reducer函数
 * 参数二: 如果是一个函数，就认为是中间件函数,  中间件函数必须 返回一个dispatch函数
 *        如果有defaultState默认值，则第三个参数为中间件函数
 */
// 第一种运用中间件的方法
const store = createStore(reducer,applyMiddleware(logger1, logger2));

// 方式二
// applyMidleware函数，用于记录有哪些中间件, 它会返回一个函数
//  -该函数用于记录创建仓库的方法 ，调用该方法,传一个函数用来告诉该怎么创建仓库
//  - 
//  applyMiddleware(logger1, logger2,)(createStore)(reducer)

// store.dispatch(loginUserAction.setLoginUserAction({name: "何冲", age: 18, hobby: "basketball"}))
store.dispatch(user.createAddUserAction({id: 3,name: "何冲", age: 18}))
































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

