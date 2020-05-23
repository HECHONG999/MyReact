export const SETADDUSER = Symbol("set-add-user");
export const SETDELETEUSER = Symbol("set-delete-user")
export const SETUPDATEUSER = Symbol("set-update-user");

// action本质上就是一个平面对象 type是该数据的类型 payload是附加的信息  
/**
 * 添加一个学生的信息
 * @param {*} user 
 */
export function createAddUserAction(user) {
    return {
        type: SETADDUSER,
        payload: user
    }
}

/**
 * 删除一个学生，根据id进行删除
 * @param {*} id 
 */
export function createDelteUser(id) {
    return {
        type: SETDELETEUSER,
        payload: id
    }
}

/**
 * 更新一个学生的信息, 学生的id 新的数据 newUserData
 * @param {*} id 
 * @param {*} newUserData 
 */
export function createUpdateUser(id, newUserData) {
    return {
        type: SETUPDATEUSER,
        payload: {
            ...newUserData,
            id
        }
    }
}