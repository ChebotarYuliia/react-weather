import React, { Component } from 'react';

class WeatherCities extends Component{
    constructor(props){
        super(props);

        this.state = {
            activeCityIndex: 0,
        };

        this.createCitiesArray = this.createCitiesArray.bind(this);
        this.setChosenCityIndex = this.setChosenCityIndex.bind(this);
    }

    createCitiesArray = (city, index) => {
        return (
            <button
                className={ (this.state.activeCityIndex === index) ? 'city-btn active' : 'city-btn' }
                onClick={ () => {this.setState({ activeCityIndex: index });
                                this.setChosenCityIndex()} }
                key={index}>
            {city.name}
          </button>
        )
      };

      setChosenCityIndex = () => {
        this.props.chosenCity( this.state.activeCityIndex );
      }

      render() {
        let citiesArray = this.props.cities.map(this.createCitiesArray);
    
        return(
            <div>
                {citiesArray}
            </div>
        );
      }
}

export default WeatherCities;