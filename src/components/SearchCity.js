import React, { Component } from 'react';

class SearchCity extends Component {
    constructor(props){
        super(props);

        this.state = {
            enteredCity : null,
        }
    }

    componentDidMount(){
        if (!window.google.maps.places) {
            throw new Error(
              '[Weather]: Google Maps Places library must be loaded. But something went wrong'
            );
        } else{
            this.init();
        }
    };

    init() {
        const searchInput = this._searchInput;
        this.autocompleteService = new window.google.maps.places.Autocomplete(searchInput);
    }

    render() {
        return(
            <div className="search-container">
                <input id="searchInput"
                   placeholder="Enter a city"
                   onChange={ (e) => this.setState({ enteredCity : e.target.value})}
                   ref={ (node) => { this._searchInput = node; }}/>
                <button className="searchBtn">ADD</button>
            </div>
        )
    };
};

export default SearchCity;