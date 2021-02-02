import React from 'react';
import Card from './card'

class Cards extends React.Component {
    state = {
        cities: []
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/find?lat=6.230833&lon=-75.590553&cnt=10&units=metric&APPID=8cc633b4d6a302cba8a6e6c37b7ee3f6')
        .then((res) => res.json())
        .then( data => {
            this.setState({cities: data.list})
            console.log(data.list)
        })
    }
    render(){
        return (<div className="container__cards">
            {
                this.state.cities.map((city, index) => {
                    return (
                    <Card 
                        key={index} 
                        city={city.name}
                        icon={ city.weather[0].icon}
                        time={city.weather[0].main}
                        temp={city.main.temp}
                    />)
                })    
            }
            </div>
        )
    }
}

export default Cards;