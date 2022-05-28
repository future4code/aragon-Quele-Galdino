import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToAdminPage } from "../routes/coordinator.jsx"
import { requestLogin } from "../services/requests.jsx"

export default function Header(props) {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleInputValues = (event) => {
        switch (event.target.name) {
            case "email": return setEmail(event.target.value)
            case "password": return setPassword(event.target.value)
        }
    }
    const login = (event) => {
        event.preventDefault()
        requestLogin(email, password, navigate)
    }
    const logout = () => {
        localStorage.removeItem("token")
        goToHomePage(navigate)
    }
    const renderHeader = localStorage.getItem("token") ?
        (<button onClick={logout}>logout</button>) :
        (
            <form onSubmit={login}>
                <label htmlFor={"email"}>email</label>
                <input id={"email"} name={"email"} value={email} onChange={handleInputValues}></input>
                <br />
                <label htmlFor={"password"}>password</label>
                <input id={"password"} name={"password"} value={password} onChange={handleInputValues}></input>
                <br />
                <button type={"submit"}>login</button>
            </form>
        )
    return (
        <header>
            <h1>Labex</h1>
            {renderHeader}
        </header>
    )
}
