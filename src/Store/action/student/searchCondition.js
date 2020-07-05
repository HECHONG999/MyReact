/**
 * 对学生查询条件改变的action的类型
 */
export const actionTypes = {
    change: Symbol("change")
}

/**  action creater
 * 根据新的查询条件，产生一个action
 * @param {*} newCondition 
 */
export function createChangeAction(newCondition) {   // neCondition新的查询条件
    return {
        type: actionTypes.change,
        payload: newCondition
    }
}
