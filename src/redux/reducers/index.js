import { combineReducers } from "redux";
// import drawerReducer from "./drawerReducer"
import userReducer from "./userReducer";
import profileReducers from "./profileReducers";
import reviewReducers from "./reviewReducers";
// import reviewReducer from './reviewReducers';
import mainReducers from "./mainReducers";
import tripReducer from "./tripReducer"

const allReducers = combineReducers({
    // menuDrawer : drawerReducer,
    userList: userReducer,
    // existingUser : loginReducer,
    existingUser: userReducer,
    userProfile: profileReducers,
    userReview: reviewReducers,
    tripView: mainReducers,
    getTrip: tripReducer
});

export default allReducers;
