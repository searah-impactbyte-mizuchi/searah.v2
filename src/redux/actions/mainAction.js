import axios from "axios";

const apiUrl = "https://searah.herokuapp.com/";

export const fetchTrip = (data) => {
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

export const joinTrip = (id,members,history) => {
    return (dispatch) => {
        return axios
            .put(`${apiUrl}trips/addMember/${id}`, {member:members})
            .then((response) => {
                // console.log(response,"response");
                alert("You have succsessfully join this trip")
                history.push(`/review/${id}`)
                // dispatch(fetchTripSukses(response.data.data));
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
