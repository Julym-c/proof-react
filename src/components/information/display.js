import React from 'react';
import './info.css'

class Information extends React.Component {
    render(){
        return ( 
            <section className="display">
                <p className="display__text">Current city</p>
                <p className="display__title">Medellin.CO</p>
                <div className="display__information">
                    <span className="information__icon"></span>
                    <div className="information__weather">
                        <p className="weather__text"> 28 ºC</p>
                        <p className="weather__subtext"> sunny</p>
                    </div>
                </div>
                <div className="display__text">
                    <p className="text">Cali,co</p>
                    <p className="text">Sunny</p>
                    <p className="text">Cali,co</p>
                    <p className="text">Sunny</p>
                </div>
            </section>
            )
    }
}

export default Information;