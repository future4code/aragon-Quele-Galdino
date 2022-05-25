import Header from "../components/Header.jsx"
export default function AdminPage(){
    return(
        <main>
            <Header actualPage={"admin-page"} />
            <hr />
            <section>
                <h2> Crie uma nova viagem!</h2>
                <hr />
                <h2> Lista de viagens!</h2>
            </section>
        </main>
    )
}