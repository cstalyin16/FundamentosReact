import { useState } from "react";
import "./App.css";
import videojuegos from "./data/videojuegos";
import TablaVideojuegos from "./components/TablaVideojuegos";

function App() {
  const [juegos] = useState(videojuegos);

  return (
    <div>
      <h2>Tienda de Videojuegos</h2>
      <TablaVideojuegos juegos={juegos} />
    </div>
  );
}
export default App;
