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
    <main id="noticias">
      <section>
        <p>Noticias recientes</p>

        <h2>Últimas Noticias</h2>

        <p>Mantente al día con las últimas tendencias y novedades.</p>
      </section>

      <section>
        {cargando && <p>Cargando ...</p>}

        {error && <p>{error}</p>}

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
