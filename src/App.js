import React, { Component } from 'react';
import './App.css';
import WeatherCities from './components/WeatherCities';
import WeatherDisplay from './components/WeatherDisplay';
import Autocomplete from 'react-google-autocomplete';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cities : [
        { name: "Kharkiv" },
      ],
      activeCity: { name: "Kharkiv" },
    };
    this.setActiveCityIndex = this.setActiveCityIndex.bind(this);
    this.handleDeleteCity = this.handleDeleteCity.bind(this);
  }

  setActiveCityIndex = (newIndex) => {
    const index = newIndex;
    this.setState({ activeCity: this.state.cities[index] });
  }

  handleSearchSubmit(place) {
    console.log(place);
    const cities = [...this.state.cities];
    cities.push({ name: place.name });
    this.setState({
      cities,
    })
  };

  handleDeleteCity = (city) => {
    let filteredCities = this.state.cities.filter( function(item) {
      return ( item.name !== city)
    });
    this.setState({
      cities: filteredCities,
    })
  };

  
  render() {
    
    const { activeCity } = this.state;

    return (
      <div className="App">
        <div className="cities-container">
          <h1 className="cities-container__title">Choose a city</h1>
          <Autocomplete
              id="searchInput"
              onPlaceSelected={(place) => { this.handleSearchSubmit(place) }}
              types={['(regions)']}
          />
          <WeatherCities 
            cities={this.state.cities}
            componentRestrictions={{country: "us"}}
            chosenCity={ this.setActiveCityIndex } 
            delete={this.handleDeleteCity}
          />
        </div>
        <WeatherDisplay city={activeCity.name}/>
      </div>
    );
  }
}

export default App;
