import React, { Component } from 'react';
import './App.css';
import WeatherCities from './components/WeatherCities';
import WeatherDisplay from './components/WeatherDisplay';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cities : [
        { name: "Kharkiv" },
        { name: "Kiev" },
        { name: "Odessa" },
        { name: "Lviv" }
      ],
      activeCityIndex: 0,
    };
    this.setActiveCityIndex = this.setActiveCityIndex.bind(this);
  }

  setActiveCityIndex = (newIndex) => {
    const index = newIndex;
    this.setState({ activeCityIndex: index })
  }
  
  render() {
    
    const { cities, activeCityIndex } = this.state;

    return (
      <div className="App">
        <div className="cities-container">
          <h1 className="cities-container__title">Choose a city</h1>
          <WeatherCities 
            cities={this.state.cities}
            chosenCity={ this.setActiveCityIndex } />
        </div>
        <WeatherDisplay city={cities[activeCityIndex].name}/>
      </div>
    );
  }
}

export default App;
