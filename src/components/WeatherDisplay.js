import React, { Component } from 'react';

class WeatherDisplay extends Component{
    constructor(props) {
        super(props);

        this.state = {
            weatherData : null,
        }
    }

    componentDidMount() {
        const city = this.props.city;
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&&units=metric`;
        fetch(URL)
        .then( res => res.json() )
        .then( json => {
            this.setState({ weatherData: json });
        });
    }

    componentWillReceiveProps() {
        const newCity = this.props.city;
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&&units=metric`;
        fetch(URL)
        .then( res => res.json() )
        .then( json => {
            this.setState({ weatherData: json });
        });
    }

    render() {

        const { weatherData } = this.state;
        if (!weatherData) return <div>Loading</div>
        const weather = weatherData.weather[0];
        const iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`;
        
        return (
            <div className="weather__container">
                <h1 className="weather__title">
                    {weather.main} in {this.props.city} 
                    <img src={iconUrl} alt={weatherData.description}/>
                </h1>
                {/* <div>{JSON.stringify(weatherData)}</div> */}
                <p>Current temp: {weatherData.main.temp}°</p>
                <p>High: {weatherData.main.temp_max}°</p>
                <p>Low: {weatherData.main.temp_min}°</p>
                <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
            </div>
        );
    };
};

export default WeatherDisplay;