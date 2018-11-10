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
                onClick={ () => this.setChosenCityIndex(index)}
                key={index}>
            {city.name}
          </button>
        )
      };

      setChosenCityIndex = (index) => {
        this.setState({
            activeCityIndex: index,
        });
        this.props.chosenCity(index);
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