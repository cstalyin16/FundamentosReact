import TarjetaNoticia from "./TarjetaNoticia";

function ListaNoticias() {
  const noticiaEjemplo = {
    id: 1,
    title: "Primera noticia del bloc - examen",
    body: "Contenido enviado mediante props hacia tarjetaNoticia",
  };

  return (
    <main id="noticias">
      <section>
        <p>Noticias recientes</p>

        <h2>Últimas Noticias</h2>

        <p>Mantente al día con las últimas tendencias y novedades.</p>
      </section>
      <section>
        <TarjetaNoticia info={noticiaEjemplo} />
      </section>
    </main>
  );
}

export default ListaNoticias;
