const initialState = {
    trip: null,
};

const tripReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "GET_TRIP":
            return action.payload;
        case "POST_TRIP":
            return action.payload;
        // case UPDATE_USER:
        //     return {
        //         user: action.payload,
        //     };
        // case "DELETE_USER":
        //     return "";
        default:
            return state;
    }
};

export default tripReducer;
