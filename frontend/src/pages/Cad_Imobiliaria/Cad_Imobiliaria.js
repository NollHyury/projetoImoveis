import React, {Component} from 'react';
import api from '../../services/apiIgluSistemas';
import {Link} from 'react-router-dom'

import './Cad_Imobiliaria.css'

class Cad_Imobiliaria extends Component{
    state = {
        nome : '',
        responsavel : '',
        endereco: '',
        cnpj: '',
        email: '',
      };
  
      handleSubmit = async e =>{
        e.preventDefault();
        console.log(this.state);
  
        const data = new FormData();
  
        data.append('nome', this.state.nome);
        data.append('responsavel', this.state.responsavel);
        data.append('enderecol', this.state.endereco);
        data.append('cnpj', this.state.cnpj);
        data.append('email', this.state.email);
        await api.post('imobiliaria', this.state).then(
            imobiliaria =>{
                alert(`${imobiliaria.data.nome} foi criada com sucesso!`)
            }
        );
  
        this.props.history.push('/feed');
  
      };
  
      handleChange = e =>{
        this.setState({[e.target.name]: e.target.value});
      };


    render(){
        return (
            <fieldset>
            <h2>Cadastre Sua Imobiliaria!</h2>
            <form id="new-Imobiliaria" onSubmit={this.handleSubmit}>
              <h3> Preencha os campos para efetuar o seu cadastro </h3>
                <input 
                    type="text" 
                    name="nome" 
                    placeholder="Digite o nome da imobiliaria"
                    onChange={this.handleChange}
                    value={this.state.nome}
                />
  
                <input 
                    type="text" 
                    name="responsavel" 
                    placeholder="Digite o nome do responsavel"
                    onChange={this.handleChange}
                    value={this.state.responsavel}
                />
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Digite o email da imobiliaria"
                    onChange={this.handleChange}
                    value={this.state.email}
                />
                <input 
                    type="text" 
                    name="cnpj" 
                    placeholder="Digite o cnpj da imobiliaria"
                    onChange={this.handleChange}
                    value={this.state.cnpj}
                />
                <input 
                    type="text" 
                    name="endereco" 
                    placeholder="Digite o endereço da imobiliria"
                    onChange={this.handleChange}
                    value={this.state.endereco}
                />

  
               
                <button type="submit">Cadastrar Imobiliaria</button>
                <Link to="/feed">Feed</Link>
                <br/>
            </form>
          </fieldset>
        );
    };
}

export default Cad_Imobiliaria;