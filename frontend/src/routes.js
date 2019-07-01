import { Switch , Route , Redirect } from 'react-router-dom';
import React from 'react'
import {autenticacao} from './auth';

import CadastroUsuario from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login'
//import Feed from './pages/Feed/Feed';
import SemLogin from '../src/pages/Paginas/SemLogin'
import ComLogin from '../src/pages/Paginas/ComLogin'

const PrivateRoute = ({ component : Component, ...rest}) =>(
    console.log(rest),
    <Route
        {...rest}
            render={props => 
                autenticacao()? (
            <ComLogin/>
        ) : (
            <Redirect to={{pathname: '/', state: {from:props.location}}}/>
        )
    }
    />
)


function Routes(){
    return (
        <Switch>
            <Route exact path="/" component={SemLogin}/>
            <Route exect path="/userlog" component={ComLogin}/>
            <Route exact path="/cadastroUsuario" component={CadastroUsuario}/>
            <Route exact path="/login" component={Login}/>
            <PrivateRoute exact path="/logado" component/>
        </Switch>
    );
}

export default Routes;