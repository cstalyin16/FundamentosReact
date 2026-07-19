import TarjetaNoticia from "./TarjetaNoticia";

function ListaNoticias() {
  const noticias = [
    {
      id: 1,
      title: "React sigue creciendo",
      body: "React continúa siendo una de las librerías más utilizadas para desarrollar aplicaciones web.",
    },
    {
      id: 2,
      title: "JavaScript domina el mercado",
      body: "Cada año JavaScript se mantiene como uno de los lenguajes más populares.",
    },
    {
      id: 3,
      title: "Vite mejora el rendimiento",
      body: "Vite permite crear proyectos React mucho más rápidos que herramientas tradicionales.",
    },
  ];

  return (
    <main id="noticias">
      <section>
        <p>Noticias recientes</p>

        <h2>Últimas Noticias</h2>

        <p>Mantente al día con las últimas tendencias y novedades.</p>
      </section>

      <section>
        {noticias.map((noticia) => (
          <TarjetaNoticia key={noticia.id} info={noticia} />
        ))}
      </section>
    </main>
  );
}

export default ListaNoticias;
