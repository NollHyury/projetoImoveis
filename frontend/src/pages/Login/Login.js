import React, { Component} from 'react';
import {Link} from 'react-router-dom'
import api from '../../services/apiIgluSistemas';



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
                if(login.data.status === true)
                    this.props.history.push('/feed');
                else
                    alert('email ou senha incorretos!');
            }
        )
        
        
    };

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    };

    render(){
        return (
        <fieldset>
          <h2>Faça seu Login!</h2>
          <form id="login-usuario" onSubmit={this.handleSubmit}>
              <h3>Informe seu email e senha para efetuar o login</h3>
              <input 
                  type="text" 
                  name="email" 
                  placeholder="Digite seu email"
                  onChange={this.handleChange}
                  value={this.state.email}
              />

              <input 
                  type="password" 
                  name="senha" 
                  placeholder="Digite sua senha"
                  onChange={this.handleChange}
                  value={this.state.senha}
              />

              <button type="submit">Logar!</button>
              <Link to="/cadastroUsuario">Cadastre-se</Link>
        </form>
        </fieldset>
    )}
}


export default Login;
