import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./css/NavBar.css";
import Home from './Home';
import Reacts from './Reacts';
import Phaser from './Phaser';
import Node from './Node';


function Navbar() {
  return (
    <Router>
      <div className='container'>
        <div className='navbar'>
          <img src="https://www.mobzway.com/assets/images/logo.png" alt="logo" />
          <nav className="link">
          <span><Link to="/" className='a' >Home</Link></span>
          <span><Link to="/reacts" className='a' >React</Link></span>
          <span><Link to="/phaser" className='a' >Phaser</Link></span>
          <span><Link to="/node" className='a' >Node</Link></span> 
          </nav>
          </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reacts" element={<Reacts />} />
            <Route path="/phaser" element={<Phaser />} />
            <Route path="/node" element={<Node />} />
          </Routes>
        
    </Router>
  );
}

export default Navbar;
