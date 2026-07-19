function Header() {
  return (
    <header>
      <div>
        <a href="/">
          <i className="bx bx-news"></i>
          <span>Bloc de Noticias</span>
        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#noticias">Noticias</a>
          <a href="#acerca">Acerca de</a>
        </nav>

        <button type="button">Suscribirse</button>
      </div>
    </header>
  );
}

export default Header;
