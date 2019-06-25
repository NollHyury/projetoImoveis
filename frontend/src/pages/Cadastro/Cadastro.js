import React, { Component } from 'react';
import api from '../../services/apiIgluSistemas';


import './Cadastro.css';

class Cadastro extends Component {
    
    state = {
      nome: '',
      sobrenome: '',
      email: '',
      senha: '',
      endereco: '',
      cpf: '',
      telefone: '',
    };

    handleSubmit = async e =>{
      e.preventDefault();
      console.log(this.state);

      const data = new FormData();

      data.append('nome', this.state.nome);
      data.append('sobrenome', this.state.sobrenome);
      data.append('email', this.state.email);
      data.append('senha', this.state.senha);
      data.append('endereco', this.state.endereco);
      data.append('cpf', this.state.cpf);
      data.append('telefone', this.state.telefone);
      console.log(data)
      await api.post('usuario', this.state);

      this.props.history.push('/');

    };

    handleChange = e =>{
      this.setState({[e.target.name]: e.target.value});
    };
  
    render(){
      return (
        <fieldset>
          <h2>Bem Vindo, Cadatre-se já!</h2>
          <form id="new-usuario" onSubmit={this.handleSubmit}>
            <h3> Preencha os campos para efetuar o seu cadastro </h3>
              <input 
                  type="text" 
                  name="nome" 
                  placeholder="Digite seu nome"
                  onChange={this.handleChange}
                  value={this.state.nome}
              />

              <input 
                  type="text" 
                  name="sobrenome" 
                  placeholder="Digite seu sobre nome"
                  onChange={this.handleChange}
                  value={this.state.sobrenome}
              />

              <input 
                  type="text" 
                  name="email" 
                  placeholder="Digite seu email"
                  onChange={this.handleChange}
                  value={this.state.email}
              />

              <input 
                  type="text" 
                  name="senha" 
                  placeholder="Digite sua senha"
                  onChange={this.handleChange}
                  value={this.state.senha}
              />

              <input 
                  type="text" 
                  name="endereco" 
                  placeholder="Digite seu endereco"
                  onChange={this.handleChange}
                  value={this.state.endereco}
              />

              <input 
                  type="text" 
                  name="cpf" 
                  placeholder="Digite seu cpf"
                  onChange={this.handleChange}
                  value={this.state.cpf}
              />

              <input 
                  type="text" 
                  name="telefone" 
                  placeholder="Digite seu telefone"
                  onChange={this.handleChange}
                  value={this.state.telefone}
              />
              <button type="submit">Cadastrar-Se</button>
          </form>
        </fieldset>
      )
  }
}


export default Cadastro;