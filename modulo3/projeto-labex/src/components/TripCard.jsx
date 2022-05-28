export default function TripCard(props){
const {id, name, description, planet, durationInDays, date}=props.trip
const token=localStorage.getItem("token")    
return(
        <section>
            <p><strong>name: </strong>{name}</p>
            <p><strong>description: </strong>{description}</p>
            <p><strong>planet: </strong>{planet}</p>
            <p><strong>duration: </strong>{durationInDays}</p>
            <p><strong>date: </strong>{date}</p>
            {token && (
                <button onClick={()=>props.removeTrip(id)}>delete trip</button>
            )}
        </section>
    )
}
