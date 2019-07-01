import React, { Component } from 'react';
import api from '../../services/apiIgluSistemas';
import io from 'socket.io-client';
import {Card,Button, CardDeck} from 'react-bootstrap';

class CardImovel extends Component {
    state = {
        feed : [],
    };

    async componentDidMount(){
        this.registerToSocket();

        const response = await api.get('imovel');

        this.setState({
            feed : response.data
        });
    }

    pegarum(){
        for (const imovel  of this.state.feed) {
            return imovel;
        }
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
                    <article key={imovel._id}>
                            <Card bg="dark" text="white" style={{width: '37rem'}}>
                            <Card.Header>{imovel.tipoImovel}</Card.Header>
                                <Card.Img variant="top" src={`http://localhost:3333/files/${imovel.image}`}/>
                                <Card.Body>
                                    <Card.Title>{imovel.endereco} -- {imovel.tipoNegocio}</Card.Title>
                                    <Card.Text>
                                        Preco: R${imovel.preco}
                                        <br/>
                                        Complemento: {imovel.complemento}
                                    </Card.Text>
                                    <Button variant="warning">Veja mais</Button>
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