export const SET_PROFILE= "SET_PROFILE";

export const setReview = (payload) => {
    return {
        type: SET_PROFILE,
        payload,
    };
};

export const fetchProfile = () => (dispatch) => {
    const token = localStorage.getItem("token");
    const url = "https://5e9407d7c7393c0016de4cfc.mockapi.io/users/${id}";
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
            dispatch(setReview(result));
        });
};