const initialState = [];

const mainReducers = (state = initialState, actions) => {
    switch (actions.type) {
        case "SET_MAIN":
            return actions.payload;
        default:
            return state;
    }
};

export default mainReducers;
