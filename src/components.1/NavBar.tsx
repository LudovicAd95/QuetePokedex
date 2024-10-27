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

  function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {

    const handlePokemonSelect = (index: number) => {
        setPokemonIndex(index);
        if (pokemonList[index].name === "pikachu") {
          alert("pika pikachu !!!");
        }
      };
    return (
      <section>
        <div>
          <PokemonCard pokemon={pokemonList[pokemonIndex]} />
          <p>{pokemonIndex}</p>
          
          {pokemonList.map((pokemon, index) => (
            <button key={pokemon.name} onClick={() => handlePokemonSelect(index)}>
              {pokemon.name}
            </button>
          ))}
        </div>
      </section> 
    );
  };
  

export default NavBar;