import { useQuery } from "@tanstack/react-query";
import { PokemonType } from "../typesReal";

interface PokemonListResponse {
  count: number;
  results: PokemonType[];
}

interface Pokemons {
  name: string;
  url: string;
}

export function useRealPokemonListQuery(page: number) {
  return useQuery({
    queryKey: ["pokemonsReal", page],
    queryFn: async () => {
      const offset = (page - 1) * 20; // Calcul de l'offset
      const limit = 20;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
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
