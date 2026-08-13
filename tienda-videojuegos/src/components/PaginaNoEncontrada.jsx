import { Link } from "react-router-dom";
import "./PaginaNoEncontrada.css";

function PaginaNoEncontrada() {
  return (
    <main className="pagina-404">
      <div className="error-card">
        <h1 className="error-codigo">404</h1>

        <h2>Página no encontrada</h2>

        <p>
          La página que estás buscando no existe o la dirección ingresada no es
          correcta.
        </p>

        <Link className="boton-volver" to="/">
          Volver al inventario
        </Link>
      </div>
    </main>
  );
}

export default PaginaNoEncontrada;
