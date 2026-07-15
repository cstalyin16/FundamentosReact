import { useState } from "react";
import "./App.css";

function Pelicula({ titulo }) {
  const [esFavorita, setEsFavorita] = useState(false);

  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        padding: "5px",
        margin: "8px",
      }}
      onClick={() => setEsFavorita(!esFavorita)}
    >
      <p>{titulo}</p>
      <p>{esFavorita ? "⭐" : ""}</p>
    </div>
  );
}

function App() {
  const [peliculas, setPeliculas] = useState([
    "Moana",
    "Dragon ball Broly",
    "Goat",
    "Mulan",
  ]);

  const [nuevaPelicula, setNuevaPelicula] = useState("");

  function agregarPelicula() {
    if (nuevaPelicula.trim() === "") {
      return;
    } else {
      setPeliculas([...peliculas, nuevaPelicula]);
      setNuevaPelicula("");
    }
  }
  return (
    <>
      <h1>Mis Películas Favoritas</h1>

      <div style={{ display: "flex", gap: "25px", justifyContent: "center" }}>
        <input
          type="text"
          value={nuevaPelicula}
          onChange={(e) => setNuevaPelicula(e.target.value)}
          placeholder="Agregar Pelicula"
          style={{
            color: "#e4e0e0",
            padding: "5px",
            borderRadius: "50px",
            border: "1px solid gray",
            width: "50%",
            height: "35px",
            marginBottom: "8px",
          }}
        />
        <button
          style={{
            padding: "5px",
            background: "white",
            borderRadius: "50px",
            height: "45px",
            width: "100px",
            border: "none",
            color: "black",
          }}
          onClick={agregarPelicula}
        >
          Agregar
        </button>
      </div>

      {peliculas.map((pelicula, indice) => (
        <Pelicula key={indice} titulo={pelicula} />
      ))}
    </>
  );
}

export default App;
