import { useState } from "react";

function FormularioVideojuego() {
  const [formulario, setFormulario] = useState({
    titulo: "",
    genero: "",
    plataforma: "",
    lanzamiento: "",
    precio: "",
    disponible: false,
    progreso: 0,
  });

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;

    setFormulario({
      ...formulario,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    console.log(formulario);
  };

  return (
    <form onSubmit={manejarSubmit}>
      <h2>Registrar Videojuego</h2>

      <div>
        <label>Título</label>
        <input
          type="text"
          name="titulo"
          value={formulario.titulo}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>Género</label>
        <select
          name="genero"
          value={formulario.genero}
          onChange={manejarCambio}
        >
          <option value="">Seleccione un género</option>
          <option value="Acción">Acción</option>
          <option value="Aventura">Aventura</option>
          <option value="Carreras">Carreras</option>
          <option value="Construcción">Construcción</option>
        </select>
      </div>

      <div>
        <label>Plataforma</label>
        <select
          name="plataforma"
          value={formulario.plataforma}
          onChange={manejarCambio}
        >
          <option value="">Seleccione una plataforma</option>
          <option value="PC">PC</option>
          <option value="PlayStation 5">PlayStation 5</option>
          <option value="Xbox Series X">Xbox Series X</option>
          <option value="Nintendo Switch">Nintendo Switch</option>
        </select>
      </div>

      <div>
        <label>Año de lanzamiento</label>
        <input
          type="number"
          name="lanzamiento"
          value={formulario.lanzamiento}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>Precio</label>
        <input
          type="number"
          step="0.01"
          name="precio"
          value={formulario.precio}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="disponible"
            checked={formulario.disponible}
            onChange={manejarCambio}
          />
          Disponible
        </label>
      </div>

      <div>
        <label>Progreso</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          name="progreso"
          value={formulario.progreso}
          onChange={manejarCambio}
        />

        <span>{Math.round(formulario.progreso * 100)}%</span>
      </div>

      <button type="submit">Guardar</button>
    </form>
  );
}

export default FormularioVideojuego;
