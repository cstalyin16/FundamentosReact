import TarjetaNoticia from "./TarjetaNoticia";

function ListaNoticias() {
  return (
    <main id="noticias">
      <section>
        <p>Noticias recientes</p>

        <h2>Últimas Noticias</h2>

        <p>Mantente al día con las últimas tendencias y novedades.</p>
      </section>
      <section>
        <TarjetaNoticia />
      </section>
    </main>
  );
}

export default ListaNoticias;
