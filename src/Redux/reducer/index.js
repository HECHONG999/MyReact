import userReducer from "./userReducer";
import loginUserReducer from "./loginUserReducer";
import {combineReducers} from "redux"
export default  (state = {}, action) => {
    const reducers = {
        userReducer: userReducer(state.userReducer, action),
        loginUserReducer: loginUserReducer(state.loginUserReducer, action),
    }
    return reducers
}

// export default combineReducers({
//     userReducers:userReducer,
//     loginUserReducer
// })