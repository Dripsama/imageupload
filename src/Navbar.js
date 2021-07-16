import React from 'react'
import About from './About';
import './Navbar.css';
import Upload from './Upload';

export default function Navbar() {
    return (
        <div>
        <navbar>
          <h1 className="brand">Imager</h1>
            <h3 className="about">
              <a href="#about" style={{color:'white'}}>About</a>
            </h3>
        </navbar>
        <Upload/>
        <div id="about">
            <About/>
        </div>
        </div>
    )
}
