import { usePokemonListQuery } from "../queries/usePokemonListQuery";
import { PokemonCard } from "./PokemonCard";
import { PokemonDetail } from "../types";
import "../App.css";

export function PokemonList() {
  const pokemonListQuery = usePokemonListQuery();
  if (pokemonListQuery.isLoading) {
    return <p>Loading...</p>;
  }
  if (pokemonListQuery.isError) {
    return <p>Error</p>;
  }
  const pokemonsList = pokemonListQuery.data;
  return (
    <div className="pokemons">
      {pokemonsList?.results.map((pokemon: PokemonDetail) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
