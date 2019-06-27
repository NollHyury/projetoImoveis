import React from 'react';
import {Link} from 'react-router-dom'


import './Header.css';

export default function Header() {
  return (
        <header id="main-header">
                <h1 className="tittle">IGLU IMOVEIS - V1.0.0</h1>
                
                <Link to="/">
                </Link>
                <Link to="/new">
                    
                </Link>
        </header>
  );
}
