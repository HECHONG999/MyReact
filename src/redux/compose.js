export default function compose(...dispatchCreators) {
    // if (dispatchCreators.length === 0) {
    //     return args => args; //如果没有要组合的函数，则返回的函数原封不动的返回参数
    // }
    // else if (dispatchCreators.length === 1) {
    //     //要组合的函数只有一个
    //     return dispatchCreators[0];
    // }
    // return dispatchCreators.reduce((a,b) => (...regs) => a(b(...regs)))
    return function(...args) {
        let lastReturn = null;
       for(let i = dispatchCreators.length - 1; i >= 0 ; i --) {
           const dispatchCreate = dispatchCreators[i]
            if(i === dispatchCreators.length - 1) { // 表示为最后一个中间件的dispatch创建函数
               lastReturn = dispatchCreate(...args);    // 最后一个 中间件把 dispatch函数返回 交给 前面一个中间件
            }else {
                lastReturn = dispatchCreate(lastReturn);
            }
       }
        return lastReturn
    }
}
