// src/components/Trabajos.js

import React, { useState, useEffect } from 'react';
import '../Styles/Trabajo.css';

const images = [
  {
    src: 'img/Front.png',
    description: 'Proyecto realizado con fines académicos, el cual consiste en una aplicación web que permite Crear, Eliminar, Consultar o Modificar registros recibidos desde una API previamente creada por el equipo.'
  },
  {
    src: 'img/Registros.png',
    description: 'Tabla de registros con sus respectivos botones.'
  },
  {
    src: 'img/Alta.png',
    description: 'Formulario de Creación de un registro.'
  }
];

const Trabajos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setFade(true);
    }, 500);
  };

  const nextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setFade(true);
    }, 500);
  };

  return (
    <div className="carousel">
      <div className={`carousel-card ${fade ? 'fade-in' : 'fade-out'}`}>
        <img src={images[currentIndex].src} alt={`Image ${currentIndex + 1}`} className="carousel-image" />
        <p className="carousel-description">{images[currentIndex].description}</p>
      </div>
      <button onClick={prevImage} className="carousel-button" id="prev">Anterior</button>
      <button onClick={nextImage} className="carousel-button" id="next">Siguiente</button>
    </div>
  );
};

export default Trabajos;
