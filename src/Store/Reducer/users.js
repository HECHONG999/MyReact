import * as userAction from "../action/users"
import {v4 as uuidv4} from "uuid";

const initialState = [
    {id: uuidv4(), name: "何冲", age: 18, hobby: "basketball"},
    {id: uuidv4(), name: "宋雪毅",age: 18, hobby: "play computer" }
]

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case userAction.SETADDUSER:
            return [...state, payload];
        case userAction.SETDELETEUSER: 
            // 通过filter方法, 返回值为true则添加到新返回的数组，为false则不添加到新数组中
            return state.filter( ele => ele.id !== payload);
        case userAction.SETUPDATEUSER:
            // 更新学生的信息，
            return state.map( it => it.id == payload.id ? {...it, ...payload} : it);
        default: 
            return state
    }
} 