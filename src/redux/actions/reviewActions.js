export const SET_REVIEW = "SET_REVIEW";

export const setReview = (payload) => {
    return {
        type: SET_REVIEW,
        payload,
    };
};

export const fetchReview = () => (dispatch) => {
    const URL = process.env.REACT_APP_API_APIURL
    const token = localStorage.getItem("token");
    const url = `${URL}/trips/41`;
    const options = {
        headers: {
            Authorization: token,
        },
    };

    fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            dispatch(setReview(result.data));
        });
};
