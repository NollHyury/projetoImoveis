import React from 'react';
import {Link} from 'react-router-dom';
import Modal from '../Modal-component/ModalImovel'

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
        <Modal class="dropdown-item"/>
        <Link class="dropdown-item" to="/cadastroImovel">Imovel</Link>
      </div>
    </li>
  </ul>
</nav>
    )
}