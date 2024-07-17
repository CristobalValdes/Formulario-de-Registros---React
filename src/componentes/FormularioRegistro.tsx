import React, { useState } from "react";
import { Registro } from "./types";

interface FormularioRegistroProps {
  onRegistroSubmit: (registro: Registro) => void;
  registros: Registro[];
}

const FormularioRegistro: React.FC<FormularioRegistroProps> = ({
  onRegistroSubmit,
  registros,
}) => {
  const initialFormData: Registro = {
    nombre: "",
    email: "",
    rut: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState<Registro>({ ...initialFormData });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verificar si el RUT ya está registrado
    const rutExists = registros.some(
      (registro) => registro.rut === formData.rut
    );

    if (rutExists) {
      setError("El RUT ingresado ya está registrado.");
    } else if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
    } else {
      setError("");
      onRegistroSubmit(formData);
      setFormData({ ...initialFormData });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: "none" }}>
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>RUT:</label>
        <input
          type="text"
          className="form-control"
          name="rut"
          value={formData.rut}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Contraseña:</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Confirmar Contraseña:</label>
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p className="text-danger">{error}</p>}
      <button type="submit" className="btn btn-primary">
        Registrar
      </button>
    </form>
  );
};

export default FormularioRegistro;
