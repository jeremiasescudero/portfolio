import React from 'react';
function Footer() {
  return (
    <footer className="text-center">
    <small>
      <span>© Jeremias Escudero</span>
      <span className="m-4">-</span>
      <a href="tel:113"> <span className="fa fa-phone"></span> 0810-888-1234 </a>
      <span className="m-4">-</span>
      Seguime en
      <a
        className="redes"
        href="https://www.facebook.com/jere.escudero.31/"
        style={{"backgroundColor": "#2962ff"}}
        target="_blank" rel="noreferrer"
      >
        <i title="Facebook" className="fab fa-facebook-f"></i>
      </a>
      <a
        className="redes"
        href="https://twitter.com/jereescu213"
        style={{"backgroundColor": "#5ba4d6"}}
        target="_blank" rel="noreferrer"
      >
        <i title="Twitter" className="fab fa-twitter"></i>
      </a>
      <a
        className="redes"
        style={{"backgroundColor": "#ec4c51"}}
        href="https://www.instagram.com/jeremiasescudero_"
        target="_blank" rel="noreferrer"
      >
        <i title="Instagram" className="fab fa-instagram"></i>
      </a>
    </small>
  </footer>

  );
}
export { Footer };