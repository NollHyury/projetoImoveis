import React, {Component} from 'react';
import api from '../../services/apiIgluSistemas';
import {Link} from 'react-router-dom'


class Formulario extends Component{
    state = {
    id_imobiliaria:'5d15532e5bf22f1df8e6b070',
    endereco:null,
    preco:null,
    num_quarto:null,
    num_sala:null,
    num_garagem:null,
    cozinha:null,
    metros_quadrados:null,
    varanda:null,
    elevador:null,
    condominio:null,
   }

   handleSubmit = async e=>{
       e.preventDefault();

       const data = new FormData();

       data.append('endereco', this.state.endereco);
       data.append('preco', this.state.preco);
       data.append('num_quarto', this.state.num_quarto);
       data.append('num_sala', this.state.num_sala);
       data.append('num_garagem', this.state.num_garagem);
       data.append('cozinha', this.state.cozinha);
       data.append('metros_quadrados', this.state.metros_quadrados);
       data.append('varanda', this.state.varanda);
       data.append('elevador', this.state.elevador);
       data.append('condominio', this.state.condominio);

       console.log(data);
       
       await api.post('imovel', data ).then(imovel =>{
           api.put(`imobiliaria/addImovel/${imovel.id_imobiliaria}/${imovel._id}`).then(
               imobiliaria =>{
                
               }
           )
           console.log(data);
       });

       
   };

   handleChange = e=>{
       this.setState({[e.target.name]: e.target.value});
   };

    render(){
        return (
        <div id="form">
                <h2>Cadastre Seu Imovel!</h2>
            <form id="new-Imovel" onSubmit={this.handleSubmit}>
            <br/>
                <input 
                    type="text" 
                    name="endereco" 
                    placeholder="Digite o endereco"
                    onChange={this.handleChange}
                    value={this.state.endereco}
                />
                <input 
                    type="number" 
                    name="preco" 
                    placeholder="Digite o valor do imovel"
                    onChange={this.handleChange}
                    value={this.state.preco}
                />
                <input 
                    type="number" 
                    name="num_quarto" 
                    placeholder="Digite o numero de quartos do imovel"
                    onChange={this.handleChange}
                    value={this.state.num_quarto}
                />
                <input 
                    type="number"
                    name="num_sala"
                    placeholder="Digite o numero de  do imovel"
                    onChange={this.handleChange}
                    value={this.state.num_sala}
                />
                <input 
                    type="number"
                    name="num_garagem"
                    placeholder="Digite o numero de garagens do imovel"
                    onChange={this.handleChange}
                    value={this.state.num_garagem}
                />
                <input 
                    type="text"
                    name="cozinha"
                    placeholder="imovel possui cozinha"
                    onChange={this.handleChange}
                    value={this.state.cozinha}
                />
                <input 
                    type="text"
                    name="varanda"
                    placeholder="O imovel possui varanda?"
                    onChange={this.handleChange}
                    value={this.state.varanda}
                />
                <input 
                    type="text"
                    name="elevador"
                    placeholder="O imovel possui elevador"
                    onChange={this.handleChange}
                    value={this.state.elevador}
                />
                <input
                    type="text"
                    name="condominio"
                    placeholder="O imovel possui condominio"
                    onChange={this.handleChange}
                    value={this.state.condominio}
                />

                <input 
                    type="number"
                    name="metros_quadrados"
                    placeholder="Digite o tamnho do imovel"
                    onChange={this.handleChange}
                    value={this.state.metros_quadrados}
                />      
                <button type="submit">Cadastrar Imovel</button>
                <Link to="/feed">Feed</Link>
                <br/>
            </form>
        </div>
        );
    };
}

export default Formulario;