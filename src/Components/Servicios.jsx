import React from 'react';
import { FaCode, FaLaptopCode, FaDatabase, FaMobileAlt, FaServer } from 'react-icons/fa';
import '../Styles/Servicios.css';

const services = [
  { icon: <FaCode />, title: 'Desarrollo Frontend', description: 'Construcción de interfaces de usuario modernas y responsivas.' },
  { icon: <FaLaptopCode />, title: 'Desarrollo Backend', description: 'Creación y mantenimiento de servidores y bases de datos.' },
  { icon: <FaDatabase />, title: 'Bases de Datos', description: 'Diseño e implementación de bases de datos SQL.' },
  { icon: <FaServer />, title: 'DevOps', description: 'Automatización y optimización de infraestructuras y despliegues.' },
];

const Servicios = () => {
  return (
    <div className="services">
      <h2>Servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
