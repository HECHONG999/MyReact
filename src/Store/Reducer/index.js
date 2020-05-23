import loginUserReducer from "./loginUser";
import usersReducer from "./users"
export default ( (state = {}, action) =>  {
    const newState = {
        // 属性名做为store中获取数据的标识
        loginUser: loginUserReducer(state.loginUser, action),
        users: usersReducer(state.users, action)
    };
    
    return newState;
})