function createThunkMiddleware(extra) {
    // 返回一个 redux 中间件函数
    return store => next => action => {
        if(typeof action === 'function') {
            action(store.dispatch, store.getState, extra);
        }else {
            next(action);
        }
    }
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware
export default thunk