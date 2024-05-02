import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./App.css";
import { Menu } from "./components/Menu.tsx";
import { AddPokemonCard } from "./components/AddPokemon.tsx";
import { PokemonList } from "./components/PokemonList.tsx";
import { PokemonListReal } from "./components/PokemonListReal.tsx";

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
        <Menu title="Pokedex" />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <PokemonListReal />,
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
      {
        path: "/prof",
        element: <PokemonList />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
