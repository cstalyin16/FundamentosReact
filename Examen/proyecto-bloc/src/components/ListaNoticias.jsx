import { useEffect, useState } from "react";
import TarjetaNoticia from "./TarjetaNoticia";

function ListaNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo obtener la información");
        }

        return respuesta.json();
      })
      .then((datos) => {
        setNoticias(datos.slice(0, 12));
      })
      .catch((error) => {
        console.error("Error al obtener las noticias:", error);
        setError("No se pudieron cargar las noticias.");
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  return (
    <main className="main" id="noticias">
      <section className="hero">
        <p className="subtitle">Noticias recientes</p>

        <h2 className="title">Últimas Noticias</h2>

        <p className="description">
          Mantente al día con las últimas tendencias y novedades.
        </p>
      </section>

      <section className="news-grid">
        {cargando && <p className="status-message">Cargando ...</p>}

        {error && <p className="status-message error-message">{error}</p>}

        {!cargando &&
          !error &&
          noticias.map((noticia) => (
            <TarjetaNoticia key={noticia.id} info={noticia} />
          ))}
      </section>
    </main>
  );
}

export default ListaNoticias;
