import axios from "axios";
const apiUrl = "https://searah.herokuapp.com/users";

export const fetchProfile = (id) => {
    return (dispatch) => {
        return axios
            .get(`${apiUrl}/${id}`)
            .then((response) => {
                dispatch(fetchingSukses(response.data));
            })

            .catch((error) => {
                throw error;
            });
    };
};

export const fetchingSukses = (data) => {
    return {
        type: "SET_PROFILE",
        payload: {
            data,
        },
    };
};
