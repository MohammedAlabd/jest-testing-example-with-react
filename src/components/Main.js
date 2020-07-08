import React, { useState, useEffect } from "react";

export default function Main({ logMe }) {
  const [input, setInput] = useState("");
//   const [pokemon, setPokemon] = useState({});

//   useEffect(() => {
//     const randomID = Math.floor(Math.random() * 100) || 1;
//     fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}`)
//       .then((res) => res.json())
//       .then((pokemonData) => {
//         const {
//           name,
//           sprites: { front_default },
//         } = pokemonData;
//         setPokemon({
//           name,
//           front_default,
//         });
//       });
//   }, []);

  const handleClick = () => {
    if (input){
       logMe(input);

    } 
  };
  return (
    <div>
      <h1>{input || "Hello, World"}</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="input"
      />
      <button data-testid="button" onClick={handleClick}>
        Button
      </button>

      {/* <h1>{pokemon.name}</h1>
      <img src={pokemon.front_default} /> */}
    </div>
  );
}
