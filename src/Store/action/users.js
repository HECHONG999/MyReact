import {getAllStudents} from "../../services/getAllStudent"

export const SETADDUSER = Symbol("set-add-user");
export const SETDELETEUSER = Symbol("set-delete-user")
export const SETUPDATEUSER = Symbol("set-update-user");
export const SETUSERS = "set-users";
export const SETISLOADING = Symbol("set-is-loading")



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

/**
 * 设置用户数组
 * @param {*} users 
 */
export function createSetUser(users) {
    return {
        type: SETUSERS,
        payload: users
    }
}

/**
 * 设置是否正在加载数据
 * @param {*} isloading 
 */
export function createSetIsloading(isloading) {
    return {
        type: SETISLOADING,
        payload: isloading
    }
}

// /**
//  * 获取用户数据的副作用函数
//  */
// export function fetchUsers() {
//     return async function (dispatch) {
//         dispatch(createSetIsloading(true));  // 获取用户前, 显示正在加载数据
//         const users =  await getAllStudents();   // 发送ajax请求获取学生数据

//         // 获取设置学生用户的action
//         const action = createSetUser(users);
//         dispatch(action);   // 通过dispatch 向仓库分发数据
//         dispatch(createSetIsloading(false)) // 关闭正在加载数据
//     }
// }

// /**
//  * 获取用户数据的副作用函数
//  */
//  export function fetchUsers() {
//      return new Promise((resolve) => {
//             const users =  getAllStudents();   // 发送ajax请求获取学生数据
//              // 获取设置学生用户的action
//             const action =  createSetUser(users);
//             resolve(action)
//      })
// }

/**
 * 获取用户数据的副作用函数
 */
 export function fetchUsers() {
    return {
        type: SETUSERS,
        payload: getAllStudents().then( res => res)
    }
}