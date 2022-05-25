import { useNavigate } from "react-router-dom";
import {goToHomePage, goToAdminPage} from "../routes/coordinator.jsx"

export default function Header(props){
    const navigate=useNavigate()
    const renderHeader=()=>{
        switch (props.actualPage) {
            case "home-page":
                return(
                    <button onClick={()=>goToAdminPage(navigate)}>Entrar</button>
                )
            case "admin-page": 
                return(
                    <button onClick={()=> goToHomePage(navigate)}>Logout</button>
                )
        }
    }
    return(
        <header>
            <h1>Labex</h1>
            {renderHeader()}
        </header>
    )
}