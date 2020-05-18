import { combineReducers } from 'redux';
// import drawerReducer from "./drawerReducer"
import userReducer from './userReducer';
import loginReducer from './loginReducer';
import profileReducers from './profileReducers'

const allReducers = combineReducers({
    // menuDrawer : drawerReducer,
    userList: userReducer,
    // existingUser : loginReducer
    existingUser: userReducer,
    userProfile: profileReducers
});

export default allReducers;
