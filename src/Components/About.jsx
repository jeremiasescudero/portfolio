import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, FaCertificate, FaHeart, FaQuoteLeft, FaEnvelope } from 'react-icons/fa';
import { IoCodeSlash } from 'react-icons/io5';
import '../Styles/About.css';

const techLinks = {
  html: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  css: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  react: 'https://reactjs.org/docs/getting-started.html',
  nodejs: 'https://nodejs.org/en/docs/',
  sqlserver: 'https://docs.microsoft.com/en-us/sql/sql-server/',
  github: 'https://github.com/'
};

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <h1>
          Sobre Mí <IoCodeSlash className="about-me-logo" />
        </h1>
        <p className="intro">
          ¡Hola! Soy un estudiante de Ingeniería en Sistemas apasionado por la programación. Mi objetivo es utilizar la tecnología para resolver problemas y crear soluciones innovadoras.
        </p>
        <p className="tech-info">
          Tengo experiencia trabajando con tecnologías <strong>Full Stack</strong> y herramientas como <strong>Postman</strong>, <strong>Visual Studio Code</strong>, y <strong>SQL Server</strong>, entre otras.
        </p>
        <div className="skills-box">
          <div className="skills">
            <h2>Tecnologías y Herramientas</h2>
            <ul className="tech-list">
              <li>
                <a href={techLinks.html} target="_blank" rel="noopener noreferrer">
                  <FaHtml5 className="tech-icon" />
                </a>
              </li>
              <li>
                <a href={techLinks.css} target="_blank" rel="noopener noreferrer">
                  <FaCss3Alt className="tech-icon" />
                </a>
              </li>
              <li>
                <a href={techLinks.javascript} target="_blank" rel="noopener noreferrer">
                  <FaJs className="tech-icon" />
                </a>
              </li>
              <li>
                <a href={techLinks.react} target="_blank" rel="noopener noreferrer">
                  <FaReact className="tech-icon" />
                </a>
              </li>
              <li>
                <a href={techLinks.nodejs} target="_blank" rel="noopener noreferrer">
                  <FaNodeJs className="tech-icon" />
                </a>
              </li>
              <li>
                <a href={techLinks.sqlserver} target="_blank" rel="noopener noreferrer">
                  <FaDatabase className="tech-icon" />
                </a>
              </li>
              <li>
                <a href={techLinks.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="tech-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="certifications">
            <h2><FaCertificate className="section-icon" /> Certificaciones</h2>
            <ul>
              <li>Certificación en React - Udemy</li>
              <li>Certificación en SQL Server - Microsoft</li>
            </ul>
          </div>
          <div className="hobbies">
            <h2><FaHeart className="section-icon" /> Hobbies e Intereses</h2>
            <p>Me encanta explorar nuevas tecnologías y aprender sobre ellas.</p>
          </div>
          <div className="testimonials">
            <h2><FaQuoteLeft className="section-icon" /> Testimonios</h2>
            <blockquote>
              <p>"Jeremías es un gran alumno y con una gran capacidad para resolver problemas."</p>
              <footer>- Fabio Escudero, profesor en UTN</footer>
            </blockquote>
          </div>
          <div className="contact">
            <h2><FaEnvelope className="section-icon" /> Contacto</h2>
            <p>Conéctate conmigo en <a href="https://www.linkedin.com/in/jeremiasescudero/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
