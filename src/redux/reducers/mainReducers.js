const initialState = [];

const mainReducers = (state = initialState, actions) => {
    // console.log(actions,"action");
    
    switch (actions.type) {
        case "SET_MAIN":
            return actions.payload;
        default:
            return state;
    }
};

export default mainReducers