import React from 'react';
import {Link} from 'react-router-dom';

import './navBar.css'

export default function NavBar(){
    return (
<nav id="main-nav"class="navbar navbar-expand-sm bg-dark navbar-dark" >

  <ul class="navbar-nav" id="lista">
    <li class="nav-item">
        <Link class="nav-link" to="/Feed">Home</Link>
    </li>
    <li class="nav-item">
        <Link class="nav-link" to="/">Login</Link>
    </li>

    <li class="nav-item dropdown" id="cadastros">
      <Link class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Cadastros
      </Link>
      <div class="dropdown-menu">
        <Link class="dropdown-item">Imobiliaria</Link>
        <Link class="dropdown-item">Imovel</Link>
      </div>
    </li>
  </ul>
  <h1>Iglu Imoveis MVC</h1>

</nav>
    )
}