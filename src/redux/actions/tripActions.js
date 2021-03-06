import axios from "axios";
import { useHistory } from "react-router-dom";
// import { UPDATE_USER, GET_USER } from "./types";

const apiUrl = "https://searah.herokuapp.com/trips";


// Get user data from API
// export const getUser = (id) => {
//     return (dispatch) => {
//         // const url = `https://5e9407d7c7393c0016de4cfc.mockapi.io/users/${id}`;
//         const url = `https://searah.herokuapp.com/users/${id}`;

//         axios
//             .get(url)
//             .then((response) => {
//                 dispatch({
//                     type: GET_USER,
//                     payload: response.data,
//                 });
//             })
//             .catch((error) => {
//                 throw error;
//             });
//     };
// };

// // Assign user data from API to userList state in redux store
// // This function will automatically executed if getUser function is called

// // ini buat apa ya?
// export const getUserSuccess = (users) => {
//     return {
//         type: "GET_USER",
//         users,
//     };
// };

// Post new user data to API
export const addTrip = (values, history) => {
    return (dispatch) => {
        return axios
            .post(`${apiUrl}`, {...values,members: localStorage.getItem('userid')})
            .then((response) => {
                dispatch(addTripSuccess(response.data));     
                history.push(`/review/${response.data.data.id}`);
            })
            .catch((error) => {
                throw error;
            });
    };
};

// Update userList state in redux store with new user data
// This function will automatically executed if addUser function is called
export const addTripSuccess = (data) => {
    return {
        type: "POST_TRIP",
        payload: {
            data,
        },
    };
};


export const fetchTripById = (id) => {
    return (dispatch) => {
        return axios
            .get(`${apiUrl}/byuser/${id}`)
            .then((response) => {
                dispatch(getTripId(response.data));
                // console.log(response);
                
            })
            .catch((error) => {
                throw error;
            });
    };
};

export const getTripId = (data) => {
    
    return {
        type: "GET_TRIP",
        payload: {
            data,
        },
    };
};
// Edit user data and send it to API
// export const updateUser = (userProfile) => async (dispatch) => {
//     const { id } = userProfile;

//     // const url = `https://5e9407d7c7393c0016de4cfc.mockapi.io/users/${id}`;
//     const url = `https://searah.herokuapp.com/users/${id}`;

//     try {
//         const data = await axios.put(url, userProfile);

//         dispatch({
//             type: UPDATE_USER,
//             payload: data.data.data,
//         });
//         dispatch({
//             type: GET_USER,
//             payload: data.data.data,
//         });
//         getUser(id);
//     } catch (err) {
//         console.error(err.message);
//     }
// };

// Update userList state in redux store with newly edited data

// Delete user data in the API

// Update userList state in redux store with latest data
