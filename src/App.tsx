// App.tsx
import React, { useState } from "react";
import "./App.css";
import HomePage from "./componentes/HomePage";
import AboutPage from "./componentes/AboutPage";
import NavBar from "./componentes/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <NavBar onSelectPage={handlePageChange} />
      <div className="container mt-4">
        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <AboutPage />}
      </div>
    </div>
  );
};

export default App;
