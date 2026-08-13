import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import videojuegos from "./data/videojuegos";
import TablaVideojuegos from "./components/TablaVideojuegos";
import FormularioVideojuego from "./components/FormularioVideojuego";
import Navbar from "./components/Navbar";

function App() {
  const [juegos, setJuegos] = useState(videojuegos);

  const eliminarJuego = (id) => {
    const nuevaLista = juegos.filter((juego) => juego.id !== id);
    setJuegos(nuevaLista);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <TablaVideojuegos juegos={juegos} onEliminar={eliminarJuego} />
            </div>
          }
        />
        <Route path="/nuevo" element={<FormularioVideojuego />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
