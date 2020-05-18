import { combineReducers } from 'redux';
// import drawerReducer from "./drawerReducer"
import userReducer from './userReducer';
import loginReducer from './loginReducer';
import profileReducers from './profileReducers'
import reviewReducers from './reviewReducers'
// import reviewReducer from './reviewReducers';

const allReducers = combineReducers({
    // menuDrawer : drawerReducer,
    userList: userReducer,
    // existingUser : loginReducer
    existingUser: userReducer,
    userProfile: profileReducers,
    userReview : reviewReducers
});

export default allReducers;
