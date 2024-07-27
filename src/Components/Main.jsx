import React from 'react';
import '../Styles/Main.css';

const Main = () => {
  return (
    <main className="main-content">
      <div className="left-section">
        <h1>Hola! Soy <br /> <span className="highlight">Jeremias Escudero</span></h1>
        <span className="badge">UI/UX</span>
        <p>Desarrollador <strong>Full-Stack</strong> y futuro <strong>Ingeniero en Sistemas de Información</strong> </p>
        <p>Actualmente mejorando mis habilidades en desarrollo a través de proyectos prácticos y cursos.</p>
        <div className="buttons">
          <a href="https://wa.me/3544400854" className="btn btn-primary">Hablemos!</a>
          <a href="https://github.com/jeremiasescudero?tab=repositories" className="btn btn-secondary">Ver Proyectos</a>
        </div>
        <div className="stats">
          <div>
            <h2>+10</h2>
            <p>Proyectos Completados</p>
          </div>
          <div>
            <h2>2</h2>
            <p>Años de Experiencia en Programación</p>
          </div>
        </div>
        <div className="skills">
          <h3>Conocimientos</h3>
          <div className="skill">
            <p>HTML</p>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '75%' }}>Intermedio (75%)</div>
            </div>
          </div>
          <div className="skill">
            <p>CSS</p>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '65%' }}>Intermedio (65%)</div>
            </div>
          </div>
          <div className="skill">
            <p>JavaScript</p>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '50%' }}>Intermedio (50%)</div>
            </div>
          </div>
          <div className="skill">
            <p>React</p>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '75%' }}>Intermedio (75%)</div>
            </div>
          </div>
          <div className="skill">
            <p>Node.js</p>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '60%' }}>Intermedio (60%)</div>
            </div>
          </div>
          <div className="skill">
            <p>SQL</p>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '80%' }}>Avanzado (80%)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <img src="/img/Foto-propia.jpg"/>
      </div>
    </main>
  );
};

export default Main;