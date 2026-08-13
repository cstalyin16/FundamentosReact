import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import "./FormularioVideojuego.css";

function FormularioVideojuego({ onGuardar, onEditar }) {
  const navigate = useNavigate();
  const location = useLocation();

  const juegoEditar = location.state?.juego;

  const [formulario, setFormulario] = useState(
    juegoEditar || {
      titulo: "",
      genero: "",
      plataforma: "",
      lanzamiento: "",
      precio: "",
      disponible: false,
      progreso: 0,
    },
  );

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;

    setFormulario({
      ...formulario,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    const juegoFormulario = {
      ...formulario,
      lanzamiento: Number(formulario.lanzamiento),
      precio: Number(formulario.precio),
      progreso: Number(formulario.progreso),
    };

    if (juegoEditar) {
      onEditar(juegoFormulario);
    } else {
      onGuardar(juegoFormulario);
    }

    navigate("/");
  };

  return (
    <main className="formulario-contenedor">
      <div className="formulario-card">
        <div className="formulario-header">
          <h2>{juegoEditar ? "Editar Videojuego" : "Registrar Videojuego"}</h2>

          <p>
            {juegoEditar
              ? "Modifica la información del videojuego seleccionado."
              : "Completa la información para agregar un nuevo videojuego al inventario."}
          </p>
        </div>

        <form onSubmit={manejarSubmit}>
          <div className="formulario-grid">
            <div className="campo campo-completo">
              <label htmlFor="titulo">Título</label>

              <input
                id="titulo"
                type="text"
                name="titulo"
                value={formulario.titulo}
                onChange={manejarCambio}
                placeholder="Ej. Super Mario Odyssey"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="genero">Género</label>

              <select
                id="genero"
                name="genero"
                value={formulario.genero}
                onChange={manejarCambio}
                required
              >
                <option value="">Seleccione un género</option>
                <option value="Acción">Acción</option>
                <option value="Aventura">Aventura</option>
                <option value="Carreras">Carreras</option>
                <option value="Construcción">Construcción</option>
              </select>
            </div>

            <div className="campo">
              <label htmlFor="plataforma">Plataforma</label>

              <select
                id="plataforma"
                name="plataforma"
                value={formulario.plataforma}
                onChange={manejarCambio}
                required
              >
                <option value="">Seleccione una plataforma</option>
                <option value="PC">PC</option>
                <option value="PlayStation 5">PlayStation 5</option>
                <option value="Xbox Series X">Xbox Series X</option>
                <option value="Nintendo Switch">Nintendo Switch</option>
              </select>
            </div>

            <div className="campo">
              <label htmlFor="lanzamiento">Año de lanzamiento</label>

              <input
                id="lanzamiento"
                type="number"
                name="lanzamiento"
                value={formulario.lanzamiento}
                onChange={manejarCambio}
                placeholder="Ej. 2024"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="precio">Precio</label>

              <input
                id="precio"
                type="number"
                step="0.01"
                min="0"
                name="precio"
                value={formulario.precio}
                onChange={manejarCambio}
                placeholder="Ej. 59.99"
                required
              />
            </div>

            <div className="campo">
              <label>Disponibilidad</label>

              <div className="checkbox-contenedor">
                <input
                  id="disponible"
                  type="checkbox"
                  name="disponible"
                  checked={formulario.disponible}
                  onChange={manejarCambio}
                />

                <label htmlFor="disponible">Disponible para la venta</label>
              </div>
            </div>

            <div className="campo">
              <label htmlFor="progreso">Progreso</label>

              <div className="progreso-formulario">
                <input
                  id="progreso"
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
            </div>
          </div>

          <div className="formulario-acciones">
            <Link className="boton-cancelar" to="/">
              Cancelar
            </Link>

            <button className="boton-guardar" type="submit">
              {juegoEditar ? "Guardar Cambios" : "Registrar Juego"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default FormularioVideojuego;
