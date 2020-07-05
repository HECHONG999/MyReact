import * as userAction from "../action/users"
import {v4 as uuidv4} from "uuid";

const initialState = {
    isLoading: false,   // 是否正在加载
    datas: []  // 用户数组
}

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case userAction.SETADDUSER:
            return{
                ...state,
                datas: [...state.datas, payload]
            };
        case userAction.SETDELETEUSER: 
            // 通过filter方法, 返回值为true则添加到新返回的数组，为false则不添加到新数组中
            return {
                ...state,
                datas: state.datas.filter( ele => ele.id !== payload)
            };
        case userAction.SETUPDATEUSER:
            // 更新学生的信息，
            return {
                ...state,
                datas: state.datas.map( it => it.id == payload.id ? {...it, ...payload} : it)
            };
        case userAction.SETUSERS:
            return {
                ...state,
                datas: [...state.datas, payload]  // 先混合一下之前仓库中得数据，再添加新的数据
            };
        case userAction.SETISLOADING:
            return {
                ...state,
                isLoading: payload
            }
        default: 
            return state
    }
} 



