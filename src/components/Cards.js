import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Silahkan lihat-lihat disini!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src={require('../images/img-poke-fire.jpg').default}
              text="Pokemon Api memiliki jumlah damage yang sangat besar"
              label='Pokemon Fire' path='/products' 
              />

            <CardItem
              src={require('../images/img-poke-water.png').default}
              text="Pokemon air ini memiliki serangan yang mampu memberikan efek lumpuh"
              label='Pokemon Water' path='/products' 
              />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src={require('../images/img-team-2.jpg').default}
              text="Tim Red (Moltres), dipimpin oleh Candela yang memfokuskan diri terhadap kekuatan yang dimiliki oleh Pokemon"
              label='Valor' path='/services' 
              />

            <CardItem
              src={require('../images/img-team-1.jpg').default}
              text="Tim Biru (Articuno), dipimpin oleh Blanche yang fokus meneliti mengapa mereka berevolusi"
              label='Mystic' path='/services' 
              />

            <CardItem
              src={require('../images/img-team-3.png').default}
              text="Tim Yellow (Zapdos), dipimpin oleh Spark yang merasa kalau Pokemon adalah makhluk yang memiliki intuisi luar biasa"
              label='Instinct' path='/services' 
              />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
