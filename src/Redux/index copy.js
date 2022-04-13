import {createStore} from "redux";

const action = {
    type: "increase",
}
/**
 *  reducer 本质上是一个函数, 通过reducer改变数据
 * @param {*} state  store仓库中的数据 
 * @param {*} action  唯一描述改变数据的原因
 */
function reducer(state, action) {
    if(action.type == "increase") {
        return state + 1
    } else if( action.type ==  "decrease") {
        return state - 1
    } 
    return state;
}

const store = createStore(reducer, 10);   // 创建一个Stores数据仓库, 参数一: 改变数据的reducer 参数二: store数据仓库中默认赋值

console.log(store.getState());

store.dispatch(action);

console.log(store.getState());


/**
 * action 描述数据改变原因，通过store.dispatch 向仓库中分发一个数据, 如果需改变仓库中的数据,则通过reducer 来告诉store仓库怎么更改，然后返回一个新的state
 */
