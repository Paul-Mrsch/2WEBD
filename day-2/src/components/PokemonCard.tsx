import "../assets/css/PokemonCard.css";
import { PokemonDetail } from "../types";
import { useState } from "react";
import { Radar } from "react-chartjs-2";
import { Chart, RadialLinearScale, PointElement, LineElement } from "chart.js";

Chart.register(RadialLinearScale, PointElement, LineElement);

interface PokemonCardProps {
  pokemon: PokemonDetail;
}

export function PokemonCard(props: PokemonCardProps) {
  const [image, setImage] = useState({
    appearance: props.pokemon.image.front_default,
  });
  const statsData = {
    labels: Object.keys(props.pokemon.stats),
    datasets: [
      {
        label: "Stats",
        data: Object.values(props.pokemon.stats),
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        pointBackgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 255,
      },
    },
  };

  return (
    <>
      <div
        className="flip-container"
        onTouchStart={(event) => {
          event.currentTarget.classList.toggle("hover");
        }}
      >
        <div className="flipper">
          <div className="front">
            <img src={image.appearance} alt={props.pokemon.name} />
            <h3>{props.pokemon.name}</h3>
            <center>
              <ul>
                {props.pokemon.types.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </center>
          </div>
          <div className="back">
            <h3 className="name"></h3>
            <h3 className="id">Name : {props.pokemon.name}</h3>
            <p className="weight">Weight : {props.pokemon.weight}</p>
            <p className="height">Height : {props.pokemon.height}</p>
            <p className="base_experience">
              Base Experience : {props.pokemon.base_experience}
            </p>
            <p className="forms">Forms : {props.pokemon.forms.join(", ")}</p>
            <p className="abilities">
              Abilities : {props.pokemon.abilities.join(", ")}
            </p>
            <p className="stats">Stats : </p>
            <Radar data={statsData} options={options} />

            <select
              className="sprite"
              onChange={(event) => setImage({ appearance: event.target.value })}
            >
              {/* Affichage de la liste de toutes les images disponibles boucle pour récupérer la clé dans image et la valeur */}
              {Object.entries(props.pokemon.image).map(([key, value]) => (
                <option key={key} value={value}>
                  {key}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
