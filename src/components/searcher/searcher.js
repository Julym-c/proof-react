import React from 'react';
import './search.css'

class Searcher extends React.Component {
    // busqueda captura los datos que el usuario escribe
    state={
        busqueda: ''
    }

    onChange= async e=> {
        e.persist();
        await this.setState({busqueda: e.target.value});
        console.log(this.state.busqueda)
        }

    render(){
        return (
            <div className="container__search">
                <input 
                    placeholder="Search other cities..." 
                    value={this.state.busqueda}
                    onChange={this.onChange}> 
                </input>
            </div>
        )
    }
}

export default Searcher;