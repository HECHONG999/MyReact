export const SETLOGINUSER = Symbol("set-login-user");
export function createLoginUserAction(user) {
    return {type: SETLOGINUSER, payload:user}
}