import React from 'react';
import './card.css'

class Card extends React.Component {
    render(){
        return ( 
            <section className="card">
                <p className="card__title">{this.props.city}</p>
                <p className="card__subtitle">{this.props.time}</p>
                <div className="card__temperature">
                    <img src={'http://openweathermap.org/img/wn/'+this.props.icon+'@2x.png'} className="temperature__icon"/>
                    <p className="temperatute__text"> {this.props.temp} ºC</p>
                </div>
            </section>
            )
    }
}

export default Card;