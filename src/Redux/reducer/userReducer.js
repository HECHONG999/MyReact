import * as usersAction from "../action/users";
import {v4 as uuidv4} from "uuid";
const initialState = [
    { id: uuidv4(), name: 'hechong', age: 18 },
    { id: uuidv4(), name: 'susu', age: 17 },
]

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case usersAction.SETADDUSER:
            return [...state, action.payload];
        case usersAction.SETDELETEUSER:
            return state.filter(it => it.id !== action.payload.id);
        case usersAction.SETUPDATEUSER:
            return state.map(it => it.id == action.payload.id ? {...it, ...action.payload}: it)
        default:
            return state;
    }
}

