import React from 'react';
import './info.css'

class Information extends React.Component {
    render(){
        return ( 
            <section className="display">
                <p className="display__title">Cali,co</p>
                <p className="display__subtitle">Sunny</p>
                <div className="display__temperature">
                    <span className="temperature__icon"></span>
                    <p className="temperatute__text"> 28 ºC</p>
                </div>
                <p className="display__title">Cali,co</p>
                <p className="display__subtitle">Sunny</p>
                <p className="display__title">Cali,co</p>
                <p className="display__subtitle">Sunny</p>
            </section>
            )
    }
}

export default Information;