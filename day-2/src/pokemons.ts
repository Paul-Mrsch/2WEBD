import { PokemonDetail } from "./types";

export const pokemons: PokemonDetail[] = [
  {
    id: 1,
    name: "bulbasaur",
    types: ["grass", "poison"],
    image: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    },
    // image:
    //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    weight: 69,
    height: 7,
    base_experience: 64,
    forms: ["bulbasaur"],
    abilities: ["overgrow", "chlorophyll"],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      "special-attack": 65,
      "special-defense": 65,
      speed: 45,
    },
  },
  {
    id: 2,
    name: "ivysaur",
    types: ["grass", "poison"],
    image: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
    },
    weight: 130,
    height: 10,
    base_experience: 142,
    forms: ["ivysaur"],
    abilities: ["overgrow", "chlorophyll"],
    stats: {
      hp: 60,
      attack: 62,
      defense: 63,
      "special-attack": 80,
      "special-defense": 80,
      speed: 60,
    },
  },
  {
    id: 3,
    name: "venusaur",
    types: ["grass", "poison"],
    image: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
    },
    weight: 1000,
    height: 20,
    base_experience: 263,
    forms: ["venusaur"],
    abilities: ["overgrow", "chlorophyll"],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      "special-attack": 100,
      "special-defense": 100,
      speed: 80,
    },
  },
  {
    id: 4,
    name: "charmander",
    types: ["fire"],
    image: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
    },
    weight: 85,
    height: 6,
    base_experience: 62,
    forms: ["charmander"],
    abilities: ["blaze", "solar-power"],
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      "special-attack": 60,
      "special-defense": 50,
      speed: 65,
    },
  },
  {
    id: 5,
    name: "charmeleon",
    types: ["fire"],
    image: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
    },
    weight: 190,
    height: 11,
    base_experience: 142,
    forms: ["charmeleon"],
    abilities: ["blaze", "solar-power"],
    stats: {
      hp: 58,
      attack: 64,
      defense: 58,
      "special-attack": 80,
      "special-defense": 65,
      speed: 80,
    },
  },
  {
    id: 6,
    name: "charizard",
    types: ["fire", "flying"],
    image: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
      dream_world:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
      home_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
      home_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/6.png",
      offical_artwork_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      offical_artwork_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/6.png",
      showdown_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/6.gif",
      showdown_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/6.gif",
    },
    weight: 905,
    height: 17,
    base_experience: 267,
    forms: ["charizard"],
    abilities: ["blaze", "solar-power"],
    stats: {
      hp: 78,
      attack: 84,
      defense: 78,
      "special-attack": 109,
      "special-defense": 85,
      speed: 100,
    },
  },
  {
    id: 7,
    name: "squirtle",
    types: ["water"],
    image: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
    },
    weight: 90,
    height: 5,
    base_experience: 63,
    forms: ["squirtle"],
    abilities: ["torrent", "rain-dish"],
    stats: {
      hp: 44,
      attack: 48,
      defense: 65,
      "special-attack": 50,
      "special-defense": 64,
      speed: 43,
    },
  },
  {
    id: 8,
    name: "wartortle",
    types: ["water"],
    image: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png",
    },
    weight: 225,
    height: 10,
    base_experience: 142,
    forms: ["wartortle"],
    abilities: ["torrent", "rain-dish"],
    stats: {
      hp: 59,
      attack: 63,
      defense: 80,
      "special-attack": 65,
      "special-defense": 80,
      speed: 58,
    },
  },
  {
    id: 9,
    name: "blastoise",
    types: ["water"],
    image: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
    },
    weight: 855,
    height: 16,
    base_experience: 265,
    forms: ["blastoise"],
    abilities: ["torrent", "rain-dish"],
    stats: {
      hp: 79,
      attack: 83,
      defense: 100,
      "special-attack": 85,
      "special-defense": 105,
      speed: 78,
    },
  },
  {
    id: 10,
    name: "caterpie",
    types: ["bug"],
    image: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png",
    },
    weight: 29,
    height: 3,
    base_experience: 39,
    forms: ["caterpie"],
    abilities: ["shield-dust", "run-away"],
    stats: {
      hp: 45,
      attack: 30,
      defense: 35,
      "special-attack": 20,
      "special-defense": 20,
      speed: 45,
    },
  },
];
