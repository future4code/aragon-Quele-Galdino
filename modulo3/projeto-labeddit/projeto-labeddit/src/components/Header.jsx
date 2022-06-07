        import React from "react"
import { useNavigate } from "react-router-dom"
import ErrorPage from "../pages/Errorpage";
import FeedPage from "../pages/FeedPage";
import LoginPage from "../pages/LoginPage";
import PostDetailsPage from "../pages/PostDetailsPage";
import SignUpPage from "../pages/SignUpPage";
import { goToFeedPage, goToLoginPage, goToPostDetailsPage, goToSignUpPage } from "../routes/coordinator";

export default function Header() {
    const navigate = useNavigate()
    return (

        <header>
            <nav>           
            <button onClick={()=> goToFeedPage(navigate)}>Página inicial</button>
            <button onClick={()=> goToLoginPage(navigate)}>Botão de login/logout</button>
            <button onClick={()=> goToPostDetailsPage(navigate)}>Página de post</button>
            <button onClick={()=> goToSignUpPage(navigate)}>Página de cadastro</button>
            </nav>
        </header>
    )
}