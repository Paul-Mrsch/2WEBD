import "../assets/css/PokemonCard.css";
import { PokemonType } from "../typesReal";
import { useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

Chart.register(RadialLinearScale, PointElement, LineElement, Filler);

interface PokemonCardProps {
  pokemon: PokemonType;
}

export function PokemonCardReal(props: PokemonCardProps) {
  const [image, setImage] = useState({
    appearance: props.pokemon.sprites.front_default,
  });

  const statsData = {
    labels: props.pokemon.stats.map((stat) => stat.stat.name),
    datasets: [
      {
        label: "Stats",
        data: props.pokemon.stats.map((stat) => stat.base_stat),

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
            <img
              src={image.appearance}
              alt={props.pokemon.name}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            <h3>{props.pokemon.name}</h3>
            <center>
              <ul>
                {props.pokemon.types.map((type) => (
                  <li key={type.slot}>{type.type.name}</li>
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
            <p className="forms">
              Forms : {props.pokemon.forms.map((form) => form.name).join(", ")}
            </p>
            <p className="abilities">
              Abilities :{" "}
              {props.pokemon.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </p>
            <p className="stats">Stats : </p>
            <Radar data={statsData} options={options} />

            <select
              className="sprite"
              onChange={(event) => setImage({ appearance: event.target.value })}
            >
              {/* Affichage de la liste de toutes les images disponibles boucle pour récupérer la clé dans image et la valeur */}
              {Object.entries(props.pokemon.sprites || {}).map(
                ([key, value]) => {
                  if (
                    typeof value === "string" &&
                    (key === "front_default" || key === "front_shiny")
                  ) {
                    return (
                      <option key={key} value={value}>
                        {key}
                      </option>
                    );
                  } else if (key !== null && key === "other") {
                    return Object.entries(
                      value as { [s: string]: unknown }
                    ).map(([subKey, subValue]) => {
                      return Object.entries(
                        subValue as unknown as { [s: string]: unknown }
                      ).map(([subSubKey, subSubValue]) => {
                        if (
                          typeof subSubValue === "string" &&
                          (subSubKey === "front_default" ||
                            subSubKey === "front_shiny")
                        ) {
                          return (
                            <option key={subSubKey} value={subSubValue}>
                              {key} - {subKey} - {subSubKey}
                            </option>
                          );
                        }
                        return null;
                      });
                    });
                  } else if (key !== null && key === "versions") {
                    return Object.entries(
                      value as { [s: string]: unknown }
                    ).map(([subKey, subValue]) => {
                      return Object.entries(
                        subValue as unknown as { [s: string]: unknown }
                      ).map(([subSubKey, subSubValue]) => {
                        return Object.entries(
                          subSubValue as unknown as { [s: string]: unknown }
                        ).map(([subSubSubKey, subSubSubValue]) => {
                          if (
                            typeof subSubSubValue === "string" &&
                            (subSubSubKey === "front_default" ||
                              subSubSubKey === "front_shiny")
                          ) {
                            return (
                              <option key={subSubSubKey} value={subSubSubValue}>
                                {key} - {subKey} - {subSubKey} - {subSubSubKey}
                              </option>
                            );
                          }
                        });
                        return null;
                      });
                    });
                  }
                  return null;
                }
              )}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
