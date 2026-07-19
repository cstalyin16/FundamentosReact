function TarjetaNoticia({ info }) {
  return (
    <article className="card">
      <span className="card-number">{info.id}</span>

      <h3 className="card-title">{info.title}</h3>

      <p className="card-body">{info.body}</p>

      <button className="btn-secondary">Leer más</button>
    </article>
  );
}

export default TarjetaNoticia;
