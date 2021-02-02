import React from 'react';
import './info.css'

class Information extends React.Component {
    // fecth api
    state = {
        current_city: '',
        icon:'',
        description:'',
        main:{}
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Medellin&lang=es&units=metric&APPID=838d87a9b63e966e5b3753b305b76dfa')
        .then((res) => res.json())
        .then( data => {
            this.setState({current_city: data})
            this.setState({icon: this.state.current_city.weather[0].icon})
            this.setState({main: this.state.current_city.main})
            this.setState({description: this.state.current_city.weather[0].description})
            //console.log(data)
            //console.log(this.state.current_city.weather[0].icon)
            console.log(this.state.current_city.weather[0].description)
        })
    }
    // renderizar
    render(){
        return ( 
            <section className="display">
                <p className="display__text">Current city</p>
                <p className="display__title">{this.state.current_city.name}</p>
                <div className="display__information">
                    <img src={'http://openweathermap.org/img/wn/'+this.state.icon+'@2x.png'}alt='icon' className="information__icon"/>
                    <div className="information__weather">
                        <p className="weather__text">{this.state.main.temp} ºC</p>
                        <p className="weather__subtext"> {this.state.description}</p>
                    </div>
                </div>
                <div className="display__text-all">
                    <p className="text"> {this.state.main.temp_min} ºC <span>Temp.minimun</span></p>
                    <p className="text">{this.state.main.temp_max} ºC <span>Temp.maximun</span></p>
                    <p className="text">{this.state.main.feels_like} ºC <span>Feels like</span></p>
                    <p className="text">{this.state.main.humidity} ºC <span>Humidity</span></p>
                </div>
            </section>
            )
    }
}

export default Information;