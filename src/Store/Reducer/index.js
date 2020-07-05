import loginUserReducer from "./loginUser";
import usersReducer from "./users"
export default ( (state = {}, action) =>  {
    const newState = {
        // 属性名做为store中获取数据的标识
        loginUser: loginUserReducer(state.loginUser, action), // state.loginUser 和 属性名loginUser 写法必须一致, loginUserReducer是reducer创建函数
        users: usersReducer(state.users, action)
    };
    
    return newState;
})