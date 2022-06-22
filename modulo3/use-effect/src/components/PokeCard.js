import axios from "axios";
import { useEffect, useState } from "react";

export default function PokeCard(props) {
const [pokemon, setPokemon]=useState({})
useEffect(()=>{pegaPokemon(props.pokeName)},[props.pokeName])


   const pegaPokemon = (pokeName) => {
     axios
       .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
       .then((response) => {
         setPokemon(response.data);
       })
       .catch((error) => {
         console.log(error);
       });
   };

  return (
    <figure>
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
      <p>Peso: {pokemon.weight}</p>
      <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p> 
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </figure>
  );
};

