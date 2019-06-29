import React, {Component} from 'react';
import api from '../../services/apiIgluSistemas';
import {Link} from 'react-router-dom'

//import './Cad_Imobiliaria.css'

class Formulario extends Component{
   
    state = {
    id_imobiliaria:'5d15532e5bf22f1df8e6b070',
    endereco:'',
    preco:'',
    num_quarto:'',
    num_sala:'',
    num_garagem:'',
    cozinha:'',
    metros_quadrados:'',
    varanda:'',
    elevador:'',
    condominio:'',
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

       await api.post('imovel', this.state).then(imovel =>{
           api.put(`imobiliaria/addImovel/${imovel.id_imobiliaria}/${imovel._id}`).then(
               imobiliaria =>{
                console.log(imobiliaria.imoveis);
                alert('imovel criado com sucesso');
               }
           )
       });

       this.props.history.push('/');
   };

   handleChange = e=>{
       this.setState({[e.target.name]: e.target.value});
   };

    render(){
        return (
            <form id="new-Imovel" onSubmit={this.handleSubmit}>
            <h2>Cadastre Seu Imovel!</h2>
            <br/>
                <input 
                    type="text" 
                    name="endereco" 
                    placeholder="Digite o endereco"
                    onChange={this.handleChange}
                    value={this.state.endereco}
                />
                <input 
                    type="" 
                    name="preco" 
                    placeholder="Digite o valor do imovel"
                    onChange={this.handleChange}
                    value={this.state.}
                />
                <input 
                    type="" 
                    name="num_quarto" 
                    placeholder="Digite o numero de quartos do imovel"
                    onChange={this.handleChange}
                    value={this.state.num_quarto}
                />
                <input
                    type=""
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
                    value={this.state.}
                />
                <input
                    type="text"
                    name="cozinha"
                    placeholder="imovel possui cozinha"
                    onChange={this.handleChange}
                    value={this.state.cozinha}
                />
                <input
                    type="number"
                    name="metro_quadrados"
                    placeholder="Digite o tamnho do imovel"
                    onChange={this.handleChange}
                    value={this.state.metros_quadrados}
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
                <button type="submit">Cadastrar Imovel</button>
                <Link to="/feed">Feed</Link>
                <br/>
            </form>
        );
    };
}

export default Formulario;