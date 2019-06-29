import React, {Component} from 'react';
import api from '../../services/apiIgluSistemas';
import {Link} from 'react-router-dom'

import './formulario.css';

class Formulario extends Component{
    
    state = {
    id_imobiliaria:'5d15532e5bf22f1df8e6b070',
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
       data.append('condominio', this.state.condominio)
       data.append('num_banheiro', this.state.num_banheiro);

       await api.post('imovel', this.state).then(imovel =>{
           api.put(`imobiliaria/addImovel/${imovel.id_imobiliaria}/${imovel._id}`).then(
               imobiliaria =>{
                console.log(imobiliaria.imoveis);
                alert('imovel criado com sucesso');
               }
           )
       });
       console.log(this.state);
       this.props.history.push('/');
   };

   handleChange = e=>{
       this.setState({[e.target.name]: e.target.value});
   };

   render(){
       return (
        <div>  
            <h3>Informações do Imovel:</h3>
            <br/>
               <form>
                    <div class="form-group">
                        <label>Endereço</label>
                            <input class="form-control"
                                required 
                                type="text" 
                                name="endereco" 
                                placeholder="Digite o endereco"
                                onChange={this.handleChange}
                                value={this.state.endereco}
                            />
                    </div>
                   <div class="form-row">
                       <div class="form-group col-md-6">
                       <label>Metros Quadrados</label>
                       <input class="form-control"
                                required 
                                type="number"
                                name="metro_quadrados"
                                placeholder="Digite o tamanho do imovel (M²)"
                                onChange={this.handleChange}
                                value={this.state.metros_quadrados}
                            />
                       </div>
                       <div class="form-group col-md-6">
                            <label>Preco</label>
                            <input class="form-control"
                                required 
                                type="number"
                                name="preco"
                                placeholder="Digite o preço (R$)"
                                onChange={this.handleChange}
                                value={this.state.preco}
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
                            required 
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
                            required
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
                            required
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
                            required
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
                            required
                            type="number"
                            name="num_banheiro"
                            placeholder="Digite o numero de  do imovel"
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
                            required
                            type="number"
                            name="condominio"
                            placeholder="Digite o numero de  do imovel"
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
                            required
                            type="number"
                            name="varanda"
                            placeholder="Digite o numero de  do imovel"
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
                            required
                            type="number"
                            name="elevador"
                            placeholder="Digite o numero de  do imovel"
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
                        <label>Complementos</label>
                            <input class="form-control"
                                required 
                                type="text" 
                                name="complemento" 
                                placeholder="Descreva algo"
                                onChange={this.handleChange}
                                value={this.state.complemento}
                            />
                    </div>
                    <hr/>
                        <h3>Envie fotos deste Imovel:</h3>
                        <button type="submit" class="btn btn-primary">Cadastrar Imovel</button>
                <Link to="/feed">Feed</Link>
                <br/>
               </form>
           </div>
       )
   }
}

export default Formulario;