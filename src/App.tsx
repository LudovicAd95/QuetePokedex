import "./App.css";
import PokemonCard from './components.1/PokemonCard';
import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

const App = () => {

  const [count, setcount] = useState(0);

  const handleClickPrecedent = () => {
    if (count > 0) {
      setcount(count -1)
    }
  };

  const handleClickSuivant = () => {
    if (count < pokemonList.length -1) {
      setcount(count +1)
    }
  };

  return (
    <section>
    <div>
      <PokemonCard pokemon={pokemonList[count]} />
      <p>{count}</p>
      <button onClick={handleClickPrecedent}>Precedent</button>
      <button onClick={handleClickSuivant}>Suivant</button>
    </div>
    </section>
  );
};

export default App;

