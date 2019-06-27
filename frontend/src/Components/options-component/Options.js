import React from 'react';


import './options.css';


export default function Options() {
  return (
      <div className="header-content">
        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
          <div class="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Conta
            </button>
          <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a class="dropdown-item" href="/login">Logar</a>
            <a class="dropdown-item" href="/cadastroUsuario">Cadastrar</a>
          </div>
        </div>
      </div>
    </div>
  );
}