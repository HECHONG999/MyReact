import store from "./index";
import { createChangeAction } from "./action/student/searchCondition"
import {fetchStudent} from "./action/student/searchResult"
store.dispatch(createChangeAction({ key: "abc", sex: 1, page: 2}))
store.dispatch(fetchStudent())






