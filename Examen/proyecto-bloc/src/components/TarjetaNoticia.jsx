function TarjetaNoticia({ info }) {
  return (
    <article>
      <span>{info.id}</span>

      <h3>{info.title}</h3>

      <p>{info.body}</p>

      <button type="button">Leer más</button>
    </article>
  );
}

export default TarjetaNoticia;
