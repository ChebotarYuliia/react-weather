import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay'

class App extends Component {
  constructor() {
    super();

    this.state = {
      cities : [
        { name: "Palo Alto", zip: "94303" },
        { name: "San Jose", zip: "94088" },
        { name: "Santa Cruz", zip: "95062" },
        { name: "Honolulu", zip: "96803" }
      ],
      activeCityIndex: 0,
    };
    this.createCitiesArray = this.createCitiesArray.bind(this);
  }

  createCitiesArray(city, index) {
    return (
      <button className={ (this.state.activeCityIndex === index) ? 'city-btn active' : 'city-btn' }
      onClick={ () => this.setState({ activeCityIndex: index }) }
      key={index}>
        {city.name}
    </button>
    )
  };
  
  render() {
    
    const { cities, activeCityIndex } = this.state;
    let citiesArray = cities.map(this.createCitiesArray);

    return (
      <div className="App">
        <div className="cities-container">
          <h1 className="cities-container__title">Choose a city</h1>
          { citiesArray }
        </div>
        <WeatherDisplay city={cities[activeCityIndex].name}
                        zip={cities[activeCityIndex].zip}
        />
      </div>
    );
  }
}

export default App;
