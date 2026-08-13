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
              <td>{juego.titulo}</td>
              <td>{juego.genero}</td>
              <td>{juego.plataforma}</td>
              <td>{juego.lanzamiento}</td>
              <td>{juego.precio}</td>
              <td>
                <p className={juego.disponible ? "disponible" : "agotado"}>
                  {juego.disponible ? "Disponible" : "Agotado"}
                </p>
              </td>
              <td>
                <progress value={juego.progreso} max="1"></progress>
                <span>{Math.round(juego.progreso * 100)}%</span>
              </td>
              <td>
                <Link to="/editar" state={{ juego }}>
                  Editar
                </Link>
                <button onClick={() => onEliminar(juego.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaVideojuegos;
