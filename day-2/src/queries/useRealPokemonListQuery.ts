import { useQuery } from "@tanstack/react-query";
import { PokemonType } from "../typesReal";

interface PokemonListResponse {
  name: string;
  results: PokemonType[];
}

interface Pokemons {
  name: string;
  url: string;
}

export function useRealPokemonListQuery() {
  return useQuery({
    queryKey: ["pokemons", "pokemonId"],
    queryFn: async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=950"
      );
      const json = await response.json();

      const pokemons: Pokemons[] = json.results;

      const pokemonDetail = await Promise.all(
        pokemons.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const json = await response.json();
          return json;
        })
      );
      return pokemonDetail as unknown as PokemonListResponse;
    },
  });
}
