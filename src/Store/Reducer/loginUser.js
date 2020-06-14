import {SETLOGINUSERTYPE} from "../action/loginUserAction";

const initialState = [{name: "我是何冲", id: "hlillidhytligh1231"}]
// action的reducer函数
export default function (state = initialState, {type, payload}) {
    switch(type) {
        case SETLOGINUSERTYPE:
            return payload;
        default:
            return state
    }
}






