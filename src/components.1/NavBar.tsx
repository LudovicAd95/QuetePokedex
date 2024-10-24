import PokemonCard from "./PokemonCard";

interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }


  function NavBar ({  pokemonIndex, setPokemonIndex, pokemonList}:NavBarProps) {


    const handleClickPrecedent = () => {
      if (pokemonIndex > 0) {
        setPokemonIndex(pokemonIndex -1)
      }
    };
  
    const handleClickSuivant = () => {
      if (pokemonIndex < pokemonList.length -1) {
        setPokemonIndex(pokemonIndex +1)
      }
    };
  
    return (
      <section>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <p>{pokemonIndex}</p>
        <button onClick={handleClickPrecedent}>Precedent</button>
        <button onClick={handleClickSuivant}>Suivant</button>
      </div>
      </section>
    );

  }

  export default NavBar;