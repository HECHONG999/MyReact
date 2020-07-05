import { actionTypes } from "../../action/student/searchCondition";

const initialState = {
    key: "",
    sex: -1,
    page: 1,
    limit: 10
} 

/**
 * 控制查询条件的reducer
 * @param {*} state 
 * @param {*} param1 
 */
export default function (state = initialState, {type, payload} ) {
    switch(type) { // 根据type类型， 更改查询条件
        case actionTypes.change:
            return {
               ...state,  // 先展开当前的数据, 再混合更改的查询条件
               ...payload
            }

        default:
            return state
    }
}