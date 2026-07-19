function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
          <i className="bx bx-news"></i>
          <span>Bloc de Noticias</span>
        </a>

        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#noticias">Noticias</a>
          <a href="#acerca">Acerca de</a>
        </nav>

        <div className="header-actions">
          <button className="btn-primary">Suscribirse</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
