import axios from "axios"
import { BASE_URL, API_CLIENT } from "../constants/urls.jsx"
import { goToAdminPage } from "../routes/coordinator.jsx"

export const requestLogin = (email, password, navigate) => {
    const body = { email: email, password: password }
    axios.post(`${BASE_URL}/${API_CLIENT}/login`, body)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            alert("logado com sucesso")
            goToAdminPage(navigate)
        })
        .catch(error => {
            alert("erro!")
            console.log(error.message)
        })
}
export const deleteTrip=(tripId, getTripsData)=>{
    const header={headers:{auth:localStorage.getItem("token")}}
    axios.delete(`${BASE_URL}/${API_CLIENT}/trips/${tripId}`, header)
    .then(()=>{
        alert("viagem deletada")
        // getTripsData()
    })
    .catch(error => alert(error.message))
}