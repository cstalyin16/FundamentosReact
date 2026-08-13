import { Link } from "react-router-dom";
import "./TablaVideojuegos.css";

function TablaVideojuegos({ juegos, onEliminar }) {
  return (
    <div className="contenedor-tabla">
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Género</th>
            <th>Plataforma</th>
            <th>Lanzamiento</th>
            <th>Precio</th>
            <th>Disponible</th>
            <th>Progreso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {juegos.map((juego) => (
            <tr key={juego.id}>
              <td data-label="Título">{juego.titulo}</td>
              <td data-label="Género">{juego.genero}</td>
              <td data-label="Plataforma">{juego.plataforma}</td>
              <td data-label="Lanzamiento">{juego.lanzamiento}</td>
              <td data-label="Precio">{juego.precio}</td>
              <td data-label="Disponible">
                <p className={juego.disponible ? "disponible" : "agotado"}>
                  {juego.disponible ? "Disponible" : "Agotado"}
                </p>
              </td>
              <td data-label="Progreso">
                <div className="progreso">
                  <progress value={juego.progreso} max="1"></progress>
                  <span>{Math.round(juego.progreso * 100)}%</span>
                </div>
              </td>
              <td data-label="Acciones">
                <div className="acciones">
                  <Link to="/editar" state={{ juego }}>
                    Editar
                  </Link>
                  <button onClick={() => onEliminar(juego.id)}>Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaVideojuegos;
