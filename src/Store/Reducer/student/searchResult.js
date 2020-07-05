import { actionTypes } from "../../action/student/searchResult";
// 默认的状态
const initialState = {
    datas: [],
    total: 0,
    isLoading: false
}


/**
 * 控制查询结果的reducer
 * @param {*} state 
 * @param {*} param1 
 */
export default function (state = initialState, { type, payload}) {
    switch(type) {
        case actionTypes.setIsLoading:
            return {
               ...state,
               isLoading: payload
            }
        case actionTypes.setStudentsAndTotal :
            return {
                ...state,
                ...payload
            }
        default: 
        return state
    }
}