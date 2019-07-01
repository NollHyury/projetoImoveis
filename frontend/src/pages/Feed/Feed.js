import React, { Component } from 'react';
import CardImovel from '../../Components/cardsFeed-Component/Card'

import './Feed.css';

class Feed extends Component {
    render(){
        return (
            <div id="main-div">
                <section id="imovel-list">
                    <CardImovel/>
                </section>
            </div>
        )
    }
}

export default Feed;