import * as loginUserAction from "../action/loginUser";
 
const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case loginUserAction.SETLOGINUSER:
    return payload;
  default:
    return state
  }
}
