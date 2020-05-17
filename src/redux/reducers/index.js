import { combineReducers } from "redux"
// import drawerReducer from "./drawerReducer"
import userReducer from "./userReducer"
import loginReducer from "./loginReducer"
import reviewReducer from "./reviewReducers"

const allReducers = combineReducers({
    // menuDrawer : drawerReducer,
    userList : userReducer,
    existingUser : loginReducer,
    userReview : reviewReducer
})

export default allReducers;