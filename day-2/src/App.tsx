import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./App.css";
import { PokemonCard } from "./components/PokemonCard";
import { Menu } from "./components/Menu.tsx";
import { pokemons } from "./pokemons.ts";
import { AddPokemonCard } from "./components/AddPokemon.tsx";

function Welcome() {
  const params = useParams();
  return (
    <div>
      <h1>Hello {params.nomDuDresseur}</h1>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: (
      <div>
        Page non trouvée
        <br />
        <a href="/">Retour à l'accueil</a>
      </div>
    ),
    element: (
      <div>
        <h1>Pokedex</h1>
        <Menu />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <div className="pokemons">
            {pokemons.map((pokemon) => (
              <PokemonCard pokemon={pokemon} />
            ))}
          </div>
        ),
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
      {
        path: "/welcome/:nomDuDresseur",
        element: <Welcome />,
      },
      {
        path: "/pokemons/new",
        element: <AddPokemonCard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
