import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/header"
import { goToLoginPage } from "../routes/coordinator"

export default function FeedPage() {
    const navigate = useNavigate()
    useEffect(() => {
        const token = window.localStorage.getItem("token-labeddit")
        if (!token) {
            goToLoginPage(navigate)
        }
    }, [])
    return (
        <>
            <Header />
            <main>
                <h1> página de feed</h1>
            </main>
        </>
    )
}
