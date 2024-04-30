import { Link } from "react-router-dom";
import "../assets/css/Menu.css";

interface MenuProps {
  title: string;
}
export function Menu(props: MenuProps) {
  return (
    <>
      <h1>{props.title}</h1>
      <center>
        <div className="ribbon">
          <a href="/">
            <span>Home</span>
          </a>
          <a href="/contact">
            <span>Contact</span>
          </a>
          <a href="/pokemons/new">
            <span>Créer un pokémon</span>
          </a>
        </div>
      </center>
      <br />
    </>
  );
}
