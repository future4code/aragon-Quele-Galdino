import axios from "axios"
import { useEffect, useState } from "react";
    
function App() {
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3003/pizza").then((res) => {
setPizzas(res.data.pizzas)
    })
  }, [])
  return (
    <>
<header>
  <p> Ambulnz</p>
</header>
<main>
  <ul>
    {pizzas.map((pizza) => (
      <li>
        <p> {pizza.name}</p>
        <p>{pizza.price} </p>
        <p> {pizza.ingredients}</p>
      </li>
    ))}
  </ul>
</main>
    </>
  )
}

export default App;
