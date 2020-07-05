import {searchStudents} from "../../../services/getAllStudent"

export const actionTypes = {
    // 设置学生查询结果数组和总数
    setStudentsAndTotal: Symbol("setStudentsAndTotal"),
    setIsLoading: Symbol("setIsLoading")
}

/**  action creater
 * 得到一个学生数组和总数的action
 * @param {*} arr 
 * @param {*} total 
 */
export function createSetStudentsAndTotal(arr, total) {
    return {
       type: actionTypes.setStudentsAndTotal,
       payload: {
            datas: arr,
            total
       }
    }
}

/**
 * 得到一个是否正在加载中的action
 * @param {*} isLoading 
 */
export function createSetIsLoading(isLoading) {
    return {
        type: actionTypes.setIsLoading,
        payload: isLoading
    }
}

/**
 * 根据当前仓库中的查询条件，查询学生
 */
export function fetchStudent() {
    return async function (dispatch, getState) {
        dispatch(createSetIsLoading(true))
        const condition = getState().student.condition
        const resp = await searchStudents(condition)
        dispatch(createSetStudentsAndTotal(resp.datas, resp.cont))
        dispatch(createSetIsLoading(false))
    }
}