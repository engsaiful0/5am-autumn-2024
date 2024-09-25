import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About'; // Import your About page
import Home from './Home'; // Import your Home page
import Excercise from './Excercise'; 
import Variable from './Variable'; 
import Datatype from './Datatype'; 
import Operators from './Operators'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo fixed-height" alt="logo" />
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/excercise">Excercise</Link></li>
              <li><Link to="/variable">Variable</Link></li>
              <li><Link to="/datatype">Datatype</Link></li>
              <li><Link to="/operators">Operators</Link></li>
            </ul>
          </nav>
        </header>
        
        {/* Define Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/excercise" element={<Excercise />} />
          <Route path="/variable" element={<Variable />} />
          <Route path="/datatype" element={<Datatype />} />
          <Route path="/operators" element={<Operators />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
