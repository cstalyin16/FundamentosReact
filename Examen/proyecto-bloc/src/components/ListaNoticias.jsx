import { useEffect, useState } from "react";
import TarjetaNoticia from "./TarjetaNoticia";

function ListaNoticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setNoticias(datos.slice(0, 12));
      })
      .catch((error) => {
        console.error("Error al obtener las noticias:", error);
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
        {noticias.map((noticia) => (
          <TarjetaNoticia key={noticia.id} info={noticia} />
        ))}
      </section>
    </main>
  );
}

export default ListaNoticias;
