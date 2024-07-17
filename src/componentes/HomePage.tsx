import React, { useState, useEffect } from "react";
import FormularioRegistro from "./FormularioRegistro";
import { Registro } from "./types";
import ListaRegistros from "./ListaRegistros";

const HomePage: React.FC = () => {
  const [registros, setRegistros] = useState<Registro[]>([]);

  // Cargar registros desde localStorage al iniciar
  useEffect(() => {
    const storedRegistros = localStorage.getItem("registros");
    if (storedRegistros) {
      setRegistros(JSON.parse(storedRegistros));
    }
  }, []);

  // Guardar registros en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("registros", JSON.stringify(registros));
  }, [registros]);

  const handleRegistroSubmit = (registro: Registro) => {
    setRegistros([...registros, registro]);
  };

  const handleRegistroDelete = (registro: Registro, password: string) => {
    // Verificar la contraseña antes de eliminar el registro
    if (registro.password === password) {
      const updatedRegistros = registros.filter((r) => r !== registro);
      setRegistros(updatedRegistros);
      alert("Registro eliminado correctamente.");
    } else {
      alert("Contraseña incorrecta. No se pudo eliminar el registro.");
    }
  };

  return (
    <div id="homePage" className="container colorwhitesmoke">
      <div className="row">
        <div className="col-md-6">
          <h1 className="mt-5">TORNEO DE FUTSAL!</h1>
          <h2>Regístrate y nos contactamos contigo</h2>
          <p>Inscribe a tu equipo para un torneo de futsal con 10 equipos!</p>
          <p>¡Regístrate fácil, solo 10 cupos disponibles!</p>
        </div>
        <div className="col-md-6">
          <FormularioRegistro
            onRegistroSubmit={handleRegistroSubmit}
            registros={registros}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h2 className="text-center">Usuarios Registrados</h2>
          <ListaRegistros
            registros={registros}
            onRegistroDelete={handleRegistroDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
