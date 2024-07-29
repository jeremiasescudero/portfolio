import React from 'react';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Jeremias<span className="dot">.</span></h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li> {/* Cambié el <a> a <Link> para manejar la navegación con React Router */}
          <li><a href="/trabajos">Trabajos<span className="arrow"> ▼</span></a></li>
          <li><Link to="/aboutme">Sobre mi</Link></li> {/* Aquí usamos <Link> para la navegación a /aboutme */}
          <li><a href="https://github.com/jeremiasescudero" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="/servicios">Servicios</a></li>
        </ul>
      </nav>
      <button className="chat-btn">Chat</button>
    </header>
  );
};

export default Header;

