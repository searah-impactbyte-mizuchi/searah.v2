const initialState = [];

const reviewReducers = (state = initialState, actions) => {
    switch (actions.type) {
        case "SET_REVIEW":
            return actions.payload;
        default:
            return state;
    }
};

export default reviewReducers
