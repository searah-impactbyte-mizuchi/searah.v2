import axios from "axios"

const apiUrl = "https://searah.herokuapp.com/users"

export const loginUser = (values) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/login`, values)
            .then(response => {
                console.log(response);
                
                dispatch(loginSuccess(response.data))
            })
            .catch(error => {
                console.log(error);
                throw (error)
                
            })
    }
}

export const loginSuccess = (data) => {
    return {
        type: "LOGIN",
        payload: {
            data
        }
    }
}