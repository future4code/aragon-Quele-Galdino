import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard";

export default function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")
  useEffect(()=>{axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151").then(response => setPokeList(response.data.results)).catch(error => console.log(error))},[])

  const changePokeName = (event) => {setPokeName(event.target.value)}

  const pokeOptions = pokeList.map(pokemon => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
       {pokemon.name}
       </option>
     );
   });

  const pokemon = pokeName && <PokeCard pokeName={pokeName}/>;

  return (
    <main>
      <header>
        <h1>Exibir Pokémon</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
        <select id={"select-pokemon"} onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeOptions}
        </select>
      </nav>
      <section>
        {pokemon}
      </section>
    </main>
  );
};


