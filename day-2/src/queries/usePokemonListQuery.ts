import { useQuery } from "@tanstack/react-query";
import { PokemonDetail } from "../types";

interface PokemonListResponse {
  count: number;
  results: PokemonDetail[];
}

export function usePokemonListQuery() {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: async () => {
      const response = await fetch("https://pokeapi.fly.dev/2webd/pokemons");
      const json = await response.json();
      return json as PokemonListResponse;
    },
  });
}
