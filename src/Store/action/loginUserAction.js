export const SETLOGINUSERTYPE = Symbol("login-user-type");


/**
 * 设置登录用户的action
 * @param {*} user 
 */
export function setLoginUserAction(user) {
    return {
        type: SETLOGINUSERTYPE,
        payload: user
    }
}