import React from 'react';
import {Link} from 'react-router-dom';
import ModalImobiliaria from '../Modal-component/ModalImobiliaria'
import ModalImovel from '../Modal-component/ModalImovel'

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
      <Link class="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
        Cadastros
      </Link>
      <div class="dropdown-menu">
        <ModalImobiliaria class="dropdown-item"/>
        <ModalImovel class="dropdown-item"/>
      </div>
    </li>
  </ul>
</nav>
    )
}