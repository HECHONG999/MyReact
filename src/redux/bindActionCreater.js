export default function bindActionCreater(actionCreater, dispatch) {
    if(typeof actionCreater === 'function') {
       return getAutoDispatchAction(actionCreater, dispatch)
    }else if(typeof actionCreater === 'object') {
        let result = {}
        for(let key in actionCreater) {
            let actionFun = actionCreater[key];
            if( typeof actionFun === 'function') {
                result[key] = getAutoDispatchAction(actionFun, dispatch)
            }else {
                throw TypeError('value of actionCreater Object is must be function')
            }
        }
        return result;
    }else {
        throw TypeError('actionCreater must be a object or function')
    }
}

function getAutoDispatchAction(actionCreater, dispatch) {
    return function(...res) {
        const action = actionCreater(...res);
        dispatch(action)
    }
}