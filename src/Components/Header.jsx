
import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#trabajos">Trabajos</a></li>
          <li><a href="#about">Sobre mi</a></li>
          <li><a href="#github">GitHub</a></li>
          <li><a href="#services">Servicios</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;