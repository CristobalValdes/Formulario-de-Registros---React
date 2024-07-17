// NavBar.tsx
import React from "react";

interface NavBarProps {
  onSelectPage: (page: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSelectPage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => onSelectPage("home")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => onSelectPage("about")}
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
