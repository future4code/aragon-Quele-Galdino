import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useRequestData from "../hooks/useRequestData.jsx"
import useForm from "../hooks/useForm.jsx"
import Header from "../components/Header.jsx"
import TripCard from "../components/TripCard.jsx"
import { goToHomePage } from "../routes/coordinator.jsx"
import { createTrip, deleteTrip } from "../services/requests.jsx"
import actualDate from "../utils/actualDate.jsx"
import { planets } from "../constants/planets.jsx"

export default function AdminPage() {
    const navigate = useNavigate()
    const [tripsData, getTripsData] = useRequestData("trips", {})
    const { form, onChange, clear } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
    })
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            goToHomePage(navigate)
        }
    }, [])
    const onClickCreate = (event) => {
        event.preventDefault()
        createTrip(form, clear, getTripsData)
    }
    const removeTrip = (tripId) => {
        if (window.confirm("Tem certeza que deseja remover esta viagem?")) {
            deleteTrip(tripId, getTripsData)
        }
    }
    const tripsList = tripsData.trips ? (
        tripsData.trips.map((trip) => {
            return <TripCard key={trip.id} trip={trip} removeTrip={removeTrip} />
        })
    ) : (
        <p>Carregando...</p>
    )
    return (
        <main>
            <Header />
            <hr />
            <section>
                <h2>Crie uma nova viagem</h2>
                <form onSubmit={onClickCreate}>
                    <label htmlFor={"name"}> Nome: </label>
                    <input
                        id={"name"}
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        pattern={"^.{5,}$"}
                        title={"O nome da viagem deve ter no mínimo 5 caracteres"}
                        required
                    />
                    <label htmlFor={"planet"}> Planeta: </label>
                    <select
                        id={"planet"}
                        name={"planet"}
                        defaultValue={""}
                        onChange={onChange}
                        required
                    >
                        <option value={""} disabled>
                            Escolha um Planeta...
                        </option>
                        {planets.map((planet) => {
                            return (
                                <option value={planet} key={planet}>
                                    {planet}
                                </option>
                            )
                        })}
                    </select>
                    <label htmlFor={"date"}> Data de lançamento: </label>
                    <input
                        id={"date"}
                        type={"date"}
                        name={"date"}
                        value={form.date}
                        onChange={onChange}
                        min={actualDate()}
                        required
                    />
                    <label htmlFor={"description"}> Descrição: </label>
                    <input
                        id={"description"}
                        name={"description"}
                        value={form.description}
                        onChange={onChange}
                        pattern={"^.{20,}$"}
                        title={"O nome deve ter no mínimo 20 caracteres"}
                        required
                    />
                    <label htmlFor={"duration"}> Duração &#40;em dias&#41;: </label>
                    <input
                        id={"duration"}
                        type={"number"}
                        name={"durationInDays"}
                        value={form.durationInDays}
                        onChange={onChange}
                        min={30}
                        required
                    />
                    <button type={"submit"}>Criar</button>
                </form>
            </section>
            <hr />
            <section>
                <h2>Lista de Viagens</h2>
                {tripsList}
            </section>
        </main>
    )
}
