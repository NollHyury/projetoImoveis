import React, {Component} from 'react';
import api from '../../services/apiIgluSistemas';
import {Link} from 'react-router-dom'

import './formulario.css';

class Formulario extends Component{
    constructor(props, context) {
        super(props, context);
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }
        state = {
            id_imobiliaria:'',
            endereco:'',
            preco:0,
            num_quarto:0,
            num_sala:0,
            num_garagem:0,
            num_banheiro:0,
            metros_quadrados:0,
            cozinha:false,
            varanda:false,
            elevador:false,
            condominio:false,
            complemento:'',
        }



   handleSubmit = async e=>{
       e.preventDefault();
       console.log(this.state)
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
       data.append('condominio', this.state.condominio)
       data.append('num_banheiro', this.state.num_banheiro);
       data.append('complemento',this.state.complemento)

       
       await api.post('imovel', this.state).then(imovel=>{
           console.log(imovel)
           alert('imovel criado');
       })
       
       
   };

   handleChange = e=>{
       this.setState({[e.target.name]: e.target.value});
   };


   render(){
       return (
        <div>  
            <h3>Informações do Imovel:</h3>
            <br/>
               <form id="new-imovel" onSubmit={this.handleSubmit} method="POST">
                    <div class="form-group">
                        <label>Endereço</label>
                            <input class="form-control"
                                 
                                type="text" 
                                name="endereco" 
                                placeholder="Digite o endereco"
                                onChange={this.handleChange}
                                value={this.state.endereco}
                            />
                    </div>
                   <div class="form-row">
                       <div class="form-group col-md-6">
                            <label>Preco</label>
                            <input class="form-control"
                                 
                                type="number"
                                name="preco"
                                placeholder="Digite o preço (R$)"
                                onChange={this.handleChange}
                                value={this.state.preco}
                            />
                       </div>
                       <div class="form-group col-md-6">
                       <label>Metros Quadrados</label>
                       <input class="form-control"
                                type="text"
                                name="metros_quadrados"
                                placeholder="Digite o tamanho do imovel"
                                onChange={this.handleChange}
                                value={this.state.metros_quadrados}
                            />
                       </div>
                   </div>
                    <hr/>
                    <h3>Caracteristicas do Imovel:</h3>
                    <br/>
                    <div class="form-row">
                        <div class="form-group col">
                            <label>Dormitorios</label>
                            <input class="form-control" 
                             
                            type="number" 
                            name="num_quarto" 
                            placeholder="Quantidade"
                            onChange={this.handleChange}
                            value={this.state.num_quarto}
                        />
                        </div>
                        <div class="form-group col">
                            <label>Numero de Salas</label>
                            <input class="form-control" 
                            
                            type="number"
                            name="num_sala"
                            placeholder="Quantidade"
                            onChange={this.handleChange}
                            value={this.state.num_sala}
                            />
                        </div>
                        <div class="form-group col">
                            <label>Garagens</label>
                            <input class="form-control"
                            
                            type="number"
                            name="num_garagem"
                            placeholder="Digite o numero de  do imovel"
                            onChange={this.handleChange}
                            value={this.state.num_garagem}
                            />
                        </div>
                        <div class="form-group col">
                            <label>Banheiros</label>
                            <input class="form-control"
                            
                            type="number"
                            name="num_banheiro"
                            placeholder="Digite o numero de  do imovel"
                            onChange={this.handleChange}
                            value={this.state.num_banheiro}
                            />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col">
                            <label>Cozinha</label>
                            <select class="form-control"
                            
                            type="text"
                            name="cozinha"
                            onChange={this.handleChange}
                            value={this.state.cozinha}
                            >
                            <option value="false">Não</option>
                            <option value="true">Sim</option>
                        </select>
                        </div>

                        <div class="form-group col">
                            <label>Condominio</label>
                            <select class="form-control"
                            
                            type="text"
                            name="condominio"
                            onChange={this.handleChange}
                            value={this.state.condominio}
                            >
                            <option value="false">Não</option>
                            <option value="true">Sim</option>
                        </select>
                        </div>
                        <div class="form-group col">
                            <label>Varanda</label>
                            <select class="form-control"
                            
                            type="text"
                            name="varanda"
                            onChange={this.handleChange}
                            value={this.state.varanda}
                            >
                            <option value="false">Não</option>
                            <option value="true">Sim</option>
                        </select>
                        </div>
                        <div class="form-group col">
                            <label>Elevador</label>
                            <select class="form-control"
                            
                            type="text"
                            name="elevador"
                            onChange={this.handleChange}
                            value={this.state.elevador}
                            >
                            <option value="false">Não</option>
                            <option value="true">Sim</option>
                        </select>
                        </div>
                    </div>
                    <hr/>
                        <h3>Informações adicionais:</h3>
                        <br/>
                        <div class="form-group">
                        <label>Complemento</label>
                            <input class="form-control"
                                 
                                type="text" 
                                name="complemento" 
                                placeholder="Descreva algo"
                                onChange={this.handleChange}
                                value={this.state.complemento}
                            />
                    </div>
                    <hr/>
                        <h3>Envie fotos deste Imovel:</h3>
                    <hr/>
                <br/>
                <button type="submit" class="btn btn-primary">Cadastrar Imovel</button>
                <Link to="/feed">Feed</Link>
               </form>
           </div>
       )
       
   }
}

export default Formulario;