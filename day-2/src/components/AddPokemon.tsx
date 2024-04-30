import "../assets/css/PokemonCard.css";
import React from "react";

export function AddPokemonCard() {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  return (
    <>
      <br />
      <br />
      <div
        className="flip-container"
        onTouchStart={(event) => {
          event.currentTarget.classList.toggle("hover");
        }}
      >
        <div className="flipper">
          <div className="front">
            <img
              style={{ width: "50%", height: "auto" }}
              src="https://i.pinimg.com/originals/c2/6d/2b/c26d2b5b239f966d2eab1d6015b115a9.png"
              alt="pokeball"
            />
            <h3>Attraper un nouveau pokemon</h3>
          </div>
          <div className="back">
            <center>
              <img
                style={{ width: "50%", height: "auto" }}
                src="https://preview.redd.it/1d0kma9knw1y.png?auto=webp&s=d5a0c64007d640dc589e60f05d973c040a563520"
                alt="pokeball"
              />
            </center>
            <br />
            <form>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />{" "}
              <br />
              <label htmlFor="type">Type:</label>
              <select
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.currentTarget.value)}
              >
                <option value="bug">🐛 Bug</option>
                <option value="dark">🌚 Dark</option>
                <option value="dragon">🐉 Dragon</option>
                <option value="electric">⚡ Electric</option>
                <option value="fairy">🧚 Fairy</option>
                <option value="fighting">🥊 Fighting</option>
                <option value="fire">🔥 Fire</option>
                <option value="flying">🦅 Flying</option>
                <option value="ghost">👻 Ghost</option>
                <option value="grass">🌿 Grass</option>
                <option value="ground">🌍 Ground</option>
                <option value="ice">❄️ Ice</option>
                <option value="normal">🧑 Normal</option>
                <option value="poison">☠️ Poison</option>
                <option value="psychic">🔮 Psychic</option>
                <option value="rock">🪨 Rock</option>
                <option value="steel">🔩 Steel</option>
                <option value="water">💧 Water</option>
              </select>
              <br />
              <label htmlFor="weight">Weight:</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={weight}
                onChange={(e) => setWeight(e.currentTarget.valueAsNumber)}
              />
              <br />
              <label htmlFor="height">Height:</label>
              <input
                type="number"
                id="height"
                name="height"
                value={height}
                onChange={(e) => setHeight(e.currentTarget.valueAsNumber)}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
