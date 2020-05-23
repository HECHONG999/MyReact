/**
 * 创建一个store仓库
 * @param {*} reducer  传入的reducer函数,定义如何改变数据
 * @param {*} defaultState 默认的state
 */
export default function (reducer, defaultState) {
    let currentReducer = reducer, // 调用currentReducer, 传入state和action 对应改变state, 然后返回state
        currentState = defaultState
    let listeners = [];   // 用于存放监听器函数
    // 获取仓库中的数据
    function getState() {
        return currentState; // 直接返回当前的state
    }

    // dispatch 分发action改变Store中的数据
    function dispatch(action) {
        // 验证action是不是一个平面对象
        if( !isPlainObject(action) ) {
            throw new TypeError(" action is a plain Object");
        }
        // 判断是否有type属性
        if( action.type === undefined ) {
            throw new TypeError(" action must be prototype of type");
        }
        currentState = currentReducer(currentState, action);
        // 每次分发时执行监听函数
        for(const listener of listeners) {
            listener()
        }
    }
    /**
     * 添加一个监听器, 再次调用时取消监听
     * @param {*} listener  传入的一个匿名函数
     */
    function subscribe(listener) { 
        if( typeof listener !== "function") {
            throw new TypeError(" listener must be a fucntion ");
        }
        listeners.push(listener);
        let isRemove = false;
        return function () {
            if( isRemove ) {
                return 
            }
            let index = listeners.indexOf(listener);
                listeners.splice(index,1 ); // 从第index位开始截取，截取一位
                isRemove = true;
        }
    }

    

    return {
        getState,
        dispatch,
        subscribe
    }
}
/**
 * 判断是不是一个平面对象
 * @param {*} action 
 */
function isPlainObject(action) {
    if( typeof action !== "object") {
        return false;
    }
    return Object.getPrototypeOf(action) === Object.prototype;
}

/**
 * 根据长度获取一个随机字符串
 * @param {*} length 
 */
function getRandomString(length) {

}