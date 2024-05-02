import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { PokemonDetail } from "../types";

interface PokemonListResponse {
  count: number;
  results: PokemonDetail[];
}

export function usePokemonListQuery(page: number) {
  return useQuery({
    queryKey: ["pokemons", page],
    queryFn: async () => {
      const offset = (page - 1) * 20; // Calcul de l'offset
      const limit = 20;
      const response = await fetch(
        `https://pokeapi.fly.dev/2webd/pokemons?offset=${offset}&limit=${limit}`
      );
      const json = await response.json();
      return json as PokemonListResponse;
    },
    placeholderData: keepPreviousData,
  });
}
