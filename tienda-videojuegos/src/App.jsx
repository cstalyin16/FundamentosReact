import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import videojuegos from "./data/videojuegos";
import TablaVideojuegos from "./components/TablaVideojuegos";
import FormularioVideojuego from "./components/FormularioVideojuego";
import Navbar from "./components/Navbar";
import PaginaNoEncontrada from "./components/PaginaNoEncontrada";

function App() {
  const [juegos, setJuegos] = useState(videojuegos);

  const eliminarJuego = (id) => {
    const nuevaLista = juegos.filter((juego) => juego.id !== id);
    setJuegos(nuevaLista);
  };

  const agregarJuego = (nuevoJuego) => {
    const juegoConId = {
      ...nuevoJuego,
      id: Date.now(),
    };

    setJuegos([...juegos, juegoConId]);
  };

  const editarJuego = (juegoEditado) => {
    const nuevaLista = juegos.map((juego) =>
      juego.id === juegoEditado.id ? juegoEditado : juego,
    );

    setJuegos(nuevaLista);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <div className="titulo-pagina">
                <h2>Inventario de Videojuegos</h2>
                <p>Administra los videojuegos disponibles en la tienda.</p>
              </div>

              <TablaVideojuegos juegos={juegos} onEliminar={eliminarJuego} />
            </main>
          }
        />

        <Route
          path="/nuevo"
          element={
            <FormularioVideojuego
              onGuardar={agregarJuego}
              onEditar={editarJuego}
            />
          }
        />

        <Route
          path="/editar"
          element={
            <FormularioVideojuego
              onGuardar={agregarJuego}
              onEditar={editarJuego}
            />
          }
        />

        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
