import { UPDATE_USER, GET_USER } from '../actions/types';

const initialState = {
    user: null,
};

const userReducer = (state = initialState, action) => {
    // console.log(action);
    
    switch (action.type) {
        case GET_USER:
            return action.payload;
        case 'POST_USER':
            return [...state, action.payload];
        case UPDATE_USER:
            return {
                user: action.payload,
            };
        case 'DELETE_USER':
            return '';
        default:
            return state;
    }
};

export default userReducer;
