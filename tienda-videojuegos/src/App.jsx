import { useState } from "react";
import "./App.css";
import videojuegos from "./data/videojuegos";
import TablaVideojuegos from "./components/TablaVideojuegos";

function App() {
  const [juegos, setJuegos] = useState(videojuegos);

  const eliminarJuego = (id) => {
    const nuevaLista = juegos.filter((juego) => juego.id !== id);
    setJuegos(nuevaLista);
  };

  return (
    <div>
      <h2>Tienda de Videojuegos</h2>
      <TablaVideojuegos juegos={juegos} onEliminar={eliminarJuego} />
    </div>
  );
}
export default App;
