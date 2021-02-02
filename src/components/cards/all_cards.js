import React from 'react';
import './cards.css'

class Card extends React.Component {
    render(){
        return ( 
            <section className="cards">
                <p className="cards__title">Cali,co</p>
                <p className="cards__subtitle">Sunny</p>
                <div className="cards__temperature">
                    <span className="temperature__icon"></span>
                    <p className="temperatute__text"> 28 ºC</p>
                </div>
            </section>
            )
    }
}

export default Card;