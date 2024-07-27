import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About.jsx';
import Main from './Components/Main.jsx';
import {Footer} from './Components/Footer.jsx';
import Trabajos from './Components/Trabajos.jsx'
import Header from './Components/Header.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/aboutme" element={<About />} />
            <Route path="/trabajos" element={<Trabajos/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
