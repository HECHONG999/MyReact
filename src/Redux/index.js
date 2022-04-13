import {createStore} from "redux";

/**
 * reducer：本质上是一个函数, 根据 store的 dispatch 分发 action（描述仓库数据怎么改变）, reducer 根据action的描述
 * 把 仓库中的旧状态 经过处理  返回新状态 重新保存在 store中
 * 类似于 MVC模式中的 controler层
 * @param {*} state 
 * @param {*} action 
 */
function reducer(state, action) {
    if(action.type === 'increase') {
        return state + 1;
    }
    if(action.type === 'decrease') {
        return state - 1;
    }
    return state
}

/**
 * createStore: 参数一: reducer 参数二: 仓库数据
 */
window.store = createStore(reducer, 10);

console.log(window.store.getState())
const action = {type: 'increase'}
window.store.dispatch(action);
console.log(window.store.getState())

