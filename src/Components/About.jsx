import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import '../Styles/About.css'; 

const techLinks = {
  html: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  css: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  react: 'https://reactjs.org/docs/getting-started.html',
  nodejs: 'https://nodejs.org/en/docs/',
  sqlserver: 'https://docs.microsoft.com/en-us/sql/sql-server/'
};

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <h1>Sobre Mí</h1>
        <p className="intro">
          ¡Hola! Soy un estudiante de Ingeniería en Sistemas apasionado por la programación. Mi objetivo es utilizar la tecnología para resolver problemas y crear soluciones innovadoras.
        </p>
        <p className="tech-info">
          Tengo experiencia trabajando con tecnologías <strong>Full Stack</strong> y herramientas como <strong>Postman</strong>, <strong>Visual Studio Code</strong>, y <strong>SQL Server</strong>, entre otras.
        </p>
        <div className="skillss">
          <h2>Tecnologías y Herramientas</h2>
          <ul className="tech-list">
            <li>
              <a href={techLinks.html} target="_blank" rel="noopener noreferrer">
                <FaHtml5 className="tech-icon" />
                <span className="tech-tooltip">HTML5</span>
              </a>
            </li>
            <li>
              <a href={techLinks.css} target="_blank" rel="noopener noreferrer">
                <FaCss3Alt className="tech-icon" />
                <span className="tech-tooltip">CSS3</span>
              </a>
            </li>
            <li>
              <a href={techLinks.javascript} target="_blank" rel="noopener noreferrer">
                <FaJs className="tech-icon" />
                <span className="tech-tooltip">JavaScript</span>
              </a>
            </li>
            <li>
              <a href={techLinks.react} target="_blank" rel="noopener noreferrer">
                <FaReact className="tech-icon" />
                <span className="tech-tooltip">React</span>
              </a>
            </li>
            <li>
              <a href={techLinks.nodejs} target="_blank" rel="noopener noreferrer">
                <FaNodeJs className="tech-icon" />
                <span className="tech-tooltip">Node.js</span>
              </a>
            </li>
            <li>
              <a href={techLinks.sqlserver} target="_blank" rel="noopener noreferrer">
                <FaDatabase className="tech-icon" />
                <span className="tech-tooltip">SQL Server</span>
              </a>
            </li>
            <div className="certifications">
          <h2>Certificaciones</h2>
          <ul>
            <li>Certificación en React - Udemy <br /></li> 
            <li>Certificación en SQL Server - Microsoft</li>
          </ul>
        </div>
        <div className="testimonials">
          <h2>Testimonios</h2>
          <blockquote>
            <p>"Jeremías es un gran alumno y con una gran capacidad para resolver problemas."</p>
            <footer>- Fabio Escudero, profesor en UTN</footer>
          </blockquote>
        </div>
        <div className="contact">
          <h2>Contacto</h2>
          <p>Conéctate conmigo en <a href="https://www.linkedin.com/in/jeremiasescudero/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
        </div>
        <div className="hobbies">
          <h2>Hobbies e Intereses</h2>
          <p>Me encanta explorar nuevas tecnologías y participar en hackatones.</p>
        </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
