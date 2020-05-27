/**
 * 根据提供的action自动dispatch到仓库中
 * 如果actionCreators传入的是一个函数, 返回的也是一个dispatch的函数
 * 如果actionCreators传入的是一个对象, 返回一个action的dispatch的对象集合
 * @param {*} actionCreators 
 * @param {*} dispatch 
 */
export default function (actionCreators, dispatch) {
    // actionCreators可能传的是一个function, 如果是函数就返回一个增强后的函数
    if( typeof actionCreators === "function" ) {
        return getAutoDispatchActionCreator(actionCreators, dispatch);
    } else if( typeof actionCreators == "object" ) {
        let result = {};
        for (const key in object) {
            if ( object.hasOwnProperty(key) ) {
                result[key] = getAutoDispatchActionCreator(actionCreators[key]);  // 获取到对象对应的value属性值
            }
        }
        return result;
    } else {
        return new TypeError("actionCreators must be function or Object which means action creator");
    }
}

function getAutoDispatchActionCreator( actionCreators, dispatch ) {
    // 用户提交时传入的参数是不确定的, 所以展开所有的数据,传给对应的action更改函数
    return function (...reg) {
        let action = actionCreators(...reg);
        dispatch(action);
    }
}