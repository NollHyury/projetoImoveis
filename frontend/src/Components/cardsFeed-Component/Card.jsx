import React, { Component } from 'react';
import api from '../../services/apiIgluSistemas';
import io from 'socket.io-client';
import {Card,Button, CardDeck} from 'react-bootstrap';

import house from '../../assets/icones/house.png'
import coins from '../../assets/icones/coins.png'
import local from '../../assets/icones/placeholder.png'
import bed from '../../assets/icones/bed.png'
import stove from '../../assets/icones/stove.png'
import car from '../../assets/icones/car.png'

import './card.css'

class CardImovel extends Component {
    state = {
        feed : [],
    };

    async componentDidMount(){
        this.registerToSocket();
        const response = await api.get('imovel')

        this.setState({
            feed : response.data
        });

    }

    registerToSocket = () =>{
        const socket = io('http://localhost:3333');
        
        socket.on('imovel', newImovel =>{
            this.setState({feed: [newImovel,...this.state.feed]});
        })
    }

    
    render(){
        
        return (
            <CardDeck>
                {this.state.feed.map(imovel=>(
                    <article id="" key={imovel._id}>
                            <Card border="dark" bg="dark" text="white" style={{width: '37rem'}}>
                            <Card.Header>
                                <img src={house} alt=""/>
                                <label><h5>{imovel.tipoImovel}</h5></label>
                            </Card.Header>
                                <Card.Img variant="top" src={`http://localhost:3333/files/${imovel.image}`}/>
                                <Card.Body>
                                    <Card.Title>
                                    <img src={local} alt=""/>
                                    {imovel.endereco} -- {imovel.tipoNegocio}
                                    </Card.Title>
                                    <Card.Text>
                                        <img src={coins} alt=""/>
                                        <label><h5>R${imovel.preco}</h5></label>
                                    <br/>
                                        

                                    </Card.Text>
                                    <Card.Footer>
                                        <div id="footer-contents">
                                        <img src={bed} alt=""/>
                                        <label><h5>Dormitorio(s): {imovel.num_quarto}</h5></label>
                                        <img src={car} alt=""/>
                                        <label><h5>Garagem: {imovel.num_garagem}</h5></label>
                                        <img src={stove} alt=""/>
                                        <label><h5>Banheiro: {imovel.num_banheiro}</h5></label>
                                        </div>
                                    </Card.Footer>
                                    <Button size="lg" variant="success">Favoritar</Button>
                                </Card.Body>
                            </Card>
                            <br/>
                            <hr/>
                            <br/>
                    </article>
                    
                ))};
            </CardDeck>
        )
    }
}

export default CardImovel;