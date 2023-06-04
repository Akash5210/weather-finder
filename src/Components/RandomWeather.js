import axios from 'axios';
import React, {useState, useEffect } from 'react';
import '../Styles/RandomWeather.css'

export default function RandomWeather(props) {
    const id = "564c2c76a3c7922755d98d9c6f2a44bc";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + props.city + "&appid=" + id + "&units=" + unit;  
    
    const [randomCity, setRandomCity] = useState([])
    const randomWeather = ()=>{
        axios.get(url)
            .then(res => {
                //console.log(response.data);
                const temp = res.data.main.temp;
                const icon = "http://openweathermap.org/img/wn/" + res.data.weather[0].icon + "@2x.png";
                const weatherDescription = res.data.weather[0].description;
                const lon = res.data.coord.lon;
                const lat = res.data.coord.lat;
                const humidity = res.data.main.humidity;
                
                setRandomCity([temp, icon, weatherDescription, lon, lat, humidity]);
            })
            .catch(err => console.log(err));
    }
    useEffect(()=>{
        randomWeather();
    }, [])


  return (
    <div className='container col-md-3 col-6 random-weather'>
        <div className="card" style={{width: "14rem"}}>
            <img src={randomCity[1]}  className="card-img-top" alt="weather icon" style={{height:'180px'}}/>
            <h5 style={{position: 'absolute',background:'#66b3ff'}} className="px-2 py-1 rounded text-light">{props.city}</h5>
            <div className="card-body" style={{height: '140px'}}>
                <p className="card-text border-top">
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