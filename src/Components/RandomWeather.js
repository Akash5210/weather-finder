import axios from 'axios';
import React, {useState, useEffect } from 'react';
import '../Styles/RandomWeather.css'

export default function RandomWeather({city, urlVariable}) {
    const [randomCity, setRandomCity] = useState([]);
    const url = urlVariable.weatherLink(city);
    const randomWeather = ()=>{
        axios.get(url)
            .then(res => {
                const data = res.data;
                const {temp, humidity} = data.main;
                const icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
                const weatherDescription = data.weather[0].description;
                const {lon, lat} = data.coord;
                
                setRandomCity([temp, icon, weatherDescription, lon, lat, humidity]);
            })
            .catch(err => console.log(err));
    }
    useEffect(()=>{
        randomWeather();
    }, [])


  return (
    <div className='container col-md-3 col-6 random-weather'>
        <div className="card border-0">
            <img src={randomCity[1]}  className="card-img-top" alt="weather icon"/>
            <h5 className="px-2 py-1 position-absolute rounded text-light">{city}</h5>
            <div className="card-body bg-primary bg-opacity-10">
                <p className="card-text">
                    Lon: {randomCity[3]} Lat: {randomCity[4]} <br/>
                    Temp: {randomCity[0]}&#176;C  <br/>
                    Weather: {randomCity[2]} <br/>
                    Humidity: {randomCity[5]}%
                </p>
            </div>
        </div>
    </div>
  )
}