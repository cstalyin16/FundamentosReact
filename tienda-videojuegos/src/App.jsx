import { useState } from "react";
import "./App.css";
import videojuegos from "./data/videojuegos";
import TablaVideojuegos from "./components/TablaVideojuegos";
import FormularioVideojuego from "./components/FormularioVideojuego";

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
      <FormularioVideojuego />
    </div>
  );
}
export default App;
