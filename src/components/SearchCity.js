import React, { Component } from 'react';

class SearchCity extends Component {
    constructor(props){
        super(props);

        this.state = {
            enteredCity : null,
        }

        this.handleChangeInput = this.handleChangeInput.bind(this)
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

    handleChangeInput = (e) => {
        this.setState({ enteredCity: e.target.value });
    };

    render() {
        return(
            <form className="search-form">
                <input id="searchInput"
                   placeholder="Enter a city"
                   onChange={ this.handleChangeInput }
                   ref={ (node) => { this._searchInput = node }}/>
                <button className="searchBtn">ADD</button>
            </form>
        )
    };
};

export default SearchCity;