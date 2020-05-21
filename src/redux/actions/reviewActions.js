 
export const SET_REVIEW = "SET_REVIEW";

export const setReview = (payload) => {
    return {
        type: SET_REVIEW,
        payload,
    };
};

export const fetchReview = (id) => (dispatch) => {
    const URL = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem("token");
    const url = `${URL}/trips/${id}`;
    const options = {
        headers: {
            Authorization: token,
        },
    };

    fetch(url, options)
        .then((response) => {
            console.log(response,"reponse");
            
            return response.json();
        })
        .then((result) => {
            dispatch(setReview(result.data));
        });
};