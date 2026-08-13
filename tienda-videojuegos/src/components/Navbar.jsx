import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Tienda de Videojuegos</h1>

      <div className="navbar-links">
        <Link to="/">Inventario</Link>
        <Link to="/nuevo">Nuevo Juego</Link>
      </div>
    </nav>
  );
}

export default Navbar;
