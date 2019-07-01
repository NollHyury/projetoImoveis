import React, { Component} from 'react';
import {Link} from 'react-router-dom'
import api from '../../services/apiIgluSistemas';
import {Button} from 'react-bootstrap';
import {autenticacao} from '../../auth';
import NavBar from '../../Components/nav-bar-component/NavBarNotLogin'



import './Login.css'

class Login extends Component{

    state = {
        email: '',
        senha: '',
    };

    handleSubmit = async e =>{
        e.preventDefault();
        console.log(this.state);
  
        const data = new FormData();
  
        data.append('email', this.state.email);
        data.append('senha', this.state.senha);

        
        await api.post('usuario/pass', this.state).then(
            login =>{
                autenticacao(login.data.status)?(
                    this.props.history.push('/userlog')
                ) : alert('email ou senha incorretos!');
            }
        )
        
        
    };

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    };

    render(){
        return (
        <div id="formulario">
        <NavBar/>

          <form id="login-usuario" onSubmit={this.handleSubmit}>
          <h2>Faça Seu Login</h2>
          <br/>
              <input 
                  type="text" 
                  name="email" 
                  placeholder="Digite seu email"
                  onChange={this.handleChange}
                  value={this.state.email}
              />
              <br/>

              <input 
                  type="password" 
                  name="senha" 
                  placeholder="Digite sua senha"
                  onChange={this.handleChange}
                  value={this.state.senha}
              />
                <br/>
              <Button variant="outline-success" type="submit">Login</Button>
              <Link to="/cadastroUsuario">Cadastre-se</Link>
        </form>
        </div>
    )}
}


export default Login;
