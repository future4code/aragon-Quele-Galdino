import Header from "../components/Header.jsx"
export default function HomePage(){
    return(
        <main>
            <Header actualPage={"home-page"} />
            <hr />
            <section>
                <h2> Inscreva-se numa nova viagem!</h2>
                <hr />
                <h2> Lista de viagens!</h2>
            </section>
        </main>
    )
}