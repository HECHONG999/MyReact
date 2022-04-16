import compose from "./compose";
/**
 * 
 * @param  {...any} middlewares 得到一个中间件数组
 * @returns 返回一个创建仓库的函数
 */
export default function ApplyMiddleware(...middlewares) {
    /**
     * 返回一个 仓库创建函数
     */
    return function (createStore) {
        /**
         * 返回一个接收 reducer函数
         */
        return function(reducer,defaultState) {
          let store =  createStore(reducer,defaultState);
          let dispatch = () => { throw new Error("目前还不能使用dispatch") };
          let middleWareApi = {
              dispatch: (action) => dispatch(action),
              getState: store.getState
          }
            //根据中间件数组，得到一个dispatch创建函数的数组
         let dispatchCreators =  middlewares.map( middleWare => middleWare(middleWareApi))
         dispatch = compose(...dispatchCreators)(store.dispatch);
         console.log("====dispatch--hechong---", dispatch)
         return {
             ...store,
             dispatch,
         }
        }
    }
}