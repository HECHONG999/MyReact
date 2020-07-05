import {SETLOGINUSERTYPE} from "../action/loginUserAction";

const initialState = [{name: "何冲", id: "个人id"}]
// action的reducer函数
export default function (state = initialState, {type, payload}) {

    switch(type) {
        case SETLOGINUSERTYPE:
            return payload;
        default:
            return state
    }
}






