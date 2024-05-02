import { useRealPokemonListQuery } from "../queries/useRealPokemonListQuery";
import { PokemonCardReal } from "./PokemonCardReal";
import { PokemonType } from "../typesReal";

interface PokemonListResponse {
  name: string;
  results: PokemonType[];
}

export function PokemonListReal() {
  const pokemonListQuery = useRealPokemonListQuery();
  if (pokemonListQuery.isLoading) {
    return <p>Loading...</p>;
  } else {
  }
  if (pokemonListQuery.isError) {
    return <p>Error</p>;
  }

  const pokemonsList: PokemonListResponse | never[] =
    pokemonListQuery.data || [];
  return (
    <>
      {pokemonsList.map((pokemon: PokemonType) => (
        <PokemonCardReal key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  );
}
