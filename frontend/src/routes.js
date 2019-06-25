import { Switch , Route } from 'react-router-dom';
import React from 'react'

import CadastroUsuario from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login'
import Feed from './pages/Feed/Feed';


function Routes(){
    return (
        <Switch>
            <Route path="/feed" component={Feed}/>
            <Route path="/cadastroUsuario" component={CadastroUsuario}/>
            <Route path="/" component={Login}/>
        </Switch>
    );
}

export default Routes;