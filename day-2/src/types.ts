export type PokemonType =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

export type PokemonDetail = {
  id: number | string;
  name: string;
  types: PokemonType[];
  image: string;
  // image: {
  //   front_default: string;
  //   front_shiny: string;
  //   dream_world?: string;
  //   home_default?: string;
  //   home_shiny?: string;
  //   offical_artwork_default?: string;
  //   offical_artwork_shiny?: string;
  //   showdown_default?: string;
  //   showdown_shiny?: string;
  // };
  weight: number;
  height: number;
  base_experience: number;
  forms: string[];
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    "special-attack": number;
    "special-defense": number;
    speed: number;
  };
};
