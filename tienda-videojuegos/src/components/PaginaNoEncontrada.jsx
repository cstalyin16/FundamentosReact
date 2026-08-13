import { Link } from "react-router-dom";

function PaginaNoEncontrada() {
  return (
    <div>
      <h1>404</h1>
      <h2>Página no encontrada</h2>

      <p>La página que estás buscando no existe.</p>

      <Link to="/">Volver al inventario</Link>
    </div>
  );
}

export default PaginaNoEncontrada;
