import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useRequestData from "../hooks/useRequestData.jsx"
import Header from "../components/Header.jsx"
import TripCard from "../components/TripCard.jsx"
import { goToAdminPage } from "../routes/coordinator.jsx"

export default function HomePage() {
  const navigate = useNavigate()
  const [tripsData] = useRequestData("trips", {})
  useEffect(() => {
    if (localStorage.getItem("token")) {
      goToAdminPage(navigate)
    }
  }, [])
  const tripsList = tripsData.trips ? (
    tripsData.trips.map((trip) => {
      return <TripCard key={trip.id} trip={trip} />
    })
  ) : (
    <p>Carregando...</p>
  )
  return (
    <main>
      <Header />
      <hr />
      <section>
        <h2>Inscreva-se numa nova viagem!</h2>
      </section>
      <hr />
      <section>
        <h2>Lista de Viagens</h2>
        {tripsList}
      </section>
    </main>
  )
}
