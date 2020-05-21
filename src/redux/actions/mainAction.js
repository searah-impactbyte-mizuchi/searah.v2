import axios from "axios";

const apiUrl = "https://searah.herokuapp.com/";

export const fetchTrip = (data) => {
    console.log(data,"data");
    return (dispatch) => {   
        return axios
            .get(`${apiUrl}trips/find/${data.destination}`, {})
            .then((response) => {
                dispatch(fetchTripSukses(response.data.data)); 
            })
            .catch((error) => {
                throw error;
            });
    };
};

export const fetchAllTrip = () => {
    return (dispatch) => {
        return axios
            .get(`${apiUrl}trips/`, {})
            .then((response) => {
                console.log(response);
                
                dispatch(fetchTripSukses(response.data.data));
            })
            .catch((error) => {
                throw error;
            });
    };
};

export const fetchTripSukses = (data) => {
    return {
        type: "SET_MAIN",
        payload: {
            data,
        },
    };
};
