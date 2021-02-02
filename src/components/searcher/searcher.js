import React from 'react';
import './search.css'

class Searcher extends React.Component {
    render(){
        return (
            <div className="container__search">
                <input placeholder="Search other cities..."></input>
            </div>
        )
    }
}

export default Searcher;