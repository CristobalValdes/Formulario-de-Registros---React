import React from "react";
import { Registro } from "./types";

interface ListaRegistrosProps {
  registros: Registro[];
  onRegistroDelete: (registro: Registro, password: string) => void;
}

const ListaRegistros: React.FC<ListaRegistrosProps> = ({
  registros,
  onRegistroDelete,
}) => {
  const handleDelete = (registro: Registro) => {
    const password = prompt(
      "Ingrese la contraseña para confirmar la eliminación:"
    );
    if (password) {
      onRegistroDelete(registro, password);
    }
  };

  return (
    <ul className="list-group">
      {registros.map((registro, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <strong>Nombre:</strong> {registro.nombre} <strong>Correo:</strong>{" "}
            {registro.email} <strong>Rut:</strong> {registro.rut}
          </div>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(registro)}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListaRegistros;
