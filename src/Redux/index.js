import {createStore} from "redux";
import reducer from "./reducer"
import {createAddUserAction} from "./action/users"
import {createLoginUserAction} from "./action/loginUser"

window.store = createStore(reducer);

console.log(window.store.getState())
window.store.dispatch(createAddUserAction({id: 12, name:'hechong', age: 12}))
window.store.dispatch(createLoginUserAction({name:'2', age:1}))

console.log(window.store.getState())


