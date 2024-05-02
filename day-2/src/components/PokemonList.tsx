import { usePokemonListQuery } from "../queries/usePokemonListQuery";
import { PokemonCard } from "./PokemonCard";
import { PokemonDetail } from "../types";
import { useState } from "react";
import "../App.css";

export function PokemonList() {
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonListQuery = usePokemonListQuery(currentPage);
  if (pokemonListQuery.isLoading) {
    return <p>Loading...</p>;
  }
  if (pokemonListQuery.isError) {
    return <p>Error</p>;
  }
  const pokemonsList = pokemonListQuery.data;

  const totalPages = Math.ceil(pokemonsList?.count ?? 0 / 20); // Calcul du nombre total de pages

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Précédent
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Suivant
        </button>
      </div>
      <div className="pokemons">
        {pokemonsList?.results.map((pokemon: PokemonDetail) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
