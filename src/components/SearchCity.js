import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';

class SearchCity extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <form className="search-form">
                <Autocomplete
                    style={{width: '90%'}}
                    onPlaceSelected={(place) => { this.props.onSubmit(place.name) }}
                    types={['(regions)']}
                />
            </form>
        )
    };
};

export default SearchCity;