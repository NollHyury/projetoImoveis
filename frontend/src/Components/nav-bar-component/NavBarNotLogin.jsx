import React from 'react';
import {Link} from 'react-router-dom';

import './navBar.css'

export default function NavBar(){
    return (
      <nav id="main-nav"class="navbar navbar-expand-sm bg-dark navbar-dark" >

        <ul class="navbar-nav" id="lista">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
  </ul>
</nav>
    )
}