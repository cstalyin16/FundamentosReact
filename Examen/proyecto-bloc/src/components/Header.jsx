import { useState } from "react";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cambiarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };
  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
          <i className="bx bx-news"></i>
          <span>Bloc de Noticias</span>
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={cambiarMenu}
          aria-expanded={menuAbierto}
          aria-label="Abrir o cerrar el menú"
        >
          <i
            className={`bx bx-menu-alt-right menu-chevron ${
              menuAbierto ? "menu-chevron-open" : ""
            }`}
          ></i>
        </button>

        <nav className={`nav ${menuAbierto ? "nav-open" : ""}`}>
          <a href="#inicio" onClick={cerrarMenu}>
            Inicio
          </a>

          <a href="#noticias" onClick={cerrarMenu}>
            Noticias
          </a>

          <a href="#acerca" onClick={cerrarMenu}>
            Acerca de
          </a>
        </nav>

        <div className="header-actions">
          <button className="btn-primary">Suscribirse</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
