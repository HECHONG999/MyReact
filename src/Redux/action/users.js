export const SETADDUSER = Symbol("set-add-user");
export const SETDELETEUSER = Symbol('set-delete-user');
export const SETUPDATEUSER = Symbol('set-update-user');

export function createAddUserAction(user) {
    return {type: SETADDUSER, payload: user}
}
export function createDeleteUserAction(id) {
    return {type: SETDELETEUSER, payload: id}
}
export function createUpdateUserAction(user) {
    return {type: SETUPDATEUSER, payload: user}
}