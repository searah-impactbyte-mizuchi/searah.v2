import axios from "axios"

const apiUrl = "https://searah.herokuapp.com/"

export const fetchTrip = (data) => {
    return (dispatch) => {
        console.log(data,"test");
        
        return axios.get(`${apiUrl}trips/find/${data.destination}`, {
        
          })
            .then(response => {
                console.log(response, "response");
                // if (response.status == 200) {
                //     dispatch(dispatch((response.data)))
                //     alert("login is succsessfuly")
                //     history.push('/main-page')
                // }
            })
            .catch(error => {
                console.log(error);
                throw (error)
                
            })
    }
}
