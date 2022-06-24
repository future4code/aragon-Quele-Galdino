import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator.jsx"

export default function ErrorPage() {
    const navigate = useNavigate()
    return (
        <main>
            <section>
                <h1>Error 400 - página não encontrada!</h1>
            </section>
            <button onClick={() => goToHomePage(navigate)}> Voltar para a homepage</button>
        </main>
    )
}