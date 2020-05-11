import axios from "axios"

const apiUrl = "https://searah.herokuapp.com/users"

// Get user data from API
export const getUser = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                console.log(response.data.data);

                dispatch(getUserSuccess(response.data.data))
            })
            .catch(error => {
                throw (error)
            })
    }
}

// Assign user data from API to userList state in redux store
// This function will automatically executed if getUser function is called
export const getUserSuccess = (users) => {
    return {
        type: "GET_USER",
        users
    }
}

// Post new user data to API
export const addUser = (values) => {
    return (dispatch) => {
        console.log(values);
        return axios.post(`${apiUrl}`, values)
            .then(response => {
       
                dispatch(addUserSuccess(response.data))
            })
            .catch(error => {
                throw (error)
            })
    }
}

// Update userList state in redux store with new user data
// This function will automatically executed if addUser function is called
export const addUserSuccess = (data) => {
    return {
        type: "POST_USER",
        payload: {
            data
        }
    }
}

// Edit user data and send it to API

// Update userList state in redux store with newly edited data

// Delete user data in the API

// Update userList state in redux store with latest data