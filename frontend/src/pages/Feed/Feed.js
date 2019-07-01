import React from 'react';
import CardImovel from '../../Components/cardsFeed-Component/Card'

import './Feed.css';

export default function Feed(){
   
        return (
            <div id="main-div">
                <section id="imovel-list">
                    <CardImovel/>
                </section>
            </div>
        )
}
