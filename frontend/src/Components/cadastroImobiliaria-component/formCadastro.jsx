
import React, {Component} from 'react';
import api from '../../services/apiIgluSistemas';


class FormImobiliaria extends Component{
    state = {
        nome: String,
        responsavel: String,
        endereco: String,
        cnpj: String,
        email: String,
    }

    handleSubmit = async e =>{
        e.preventDefault();

        const data = new FormData();

        data.append('nome',this.state.nome);
        data.append('responsavel',this.state.responsavel);
        data.append('endereco',this.state.endereco);
        data.append('cnpj',this.state.cnpj);
        data.append('email',this.state.email);

        await api.post('imobiliaria', this.state).then(
            imobiliaria => {
                alert(`${imobiliaria.data.nome} foi criada com sucesso`)
            }
        );
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value});
      };
    
    render(){
        return (
        <div>
            <h3>Informações da Imobiliria:</h3>
            <br/>
            <form id="new-Imobiliaria" onSubmit={this.handleSubmit} method="POST">
                <div class="form-group">
                    <label>Nome da Imobiliaria</label>
                    <input class="form-control"
                        required
                        type="text" 
                        name="nome" 
                        placeholder="Digite o nome da imobiliaria"
                        onChange={this.handleChange}
                        value={this.state.nome}
                    />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Nome do responsavel</label>
                        <input class="form-control"
                        type="text" 
                        name="responsavel" 
                        placeholder="Digite o nome do responsavel"
                        onChange={this.handleChange}
                        value={this.state.responsavel}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label>Email da Imobiliaria</label>
                        <input class="form-control"
                            type="text" 
                            name="email" 
                            placeholder="Digite o email da imobiliaria"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>CNPJ da Imobiliaria</label>
                        <input class="form-control"
                            type="text" 
                            name="cnpj" 
                            placeholder="Digite o cnpj da imobiliaria"
                            onChange={this.handleChange}
                            value={this.state.cnpj}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label>Endereco da Imobiliaria</label>
                        <input class="form-control"
                            type="text" 
                            name="endereco" 
                            placeholder="Digite o endereço da imobiliria"
                            onChange={this.handleChange}
                            value={this.state.endereco}
                        />
                    </div>
                </div>
                <button class="btn btn-primary" type="submit">Cadastrar Imobiliaria</button>
                <br/>
            </form>
        </div>
        )
    }
}


export default FormImobiliaria;