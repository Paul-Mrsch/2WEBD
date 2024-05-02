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
          <Link to={"/"}>
            <span>Home</span>
          </Link>
          <Link to={"contact"}>
            <span>Contact</span>
          </Link>
          <Link to={"/pokemons/new"}>
            <span>Créer un pokémon</span>
          </Link>
          <Link to={"/prof"}>
            <span>Professeur</span>
          </Link>
        </div>
      </center>
      <br />
    </>
  );
}
