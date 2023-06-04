import axios from "axios";
import { useState } from  "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Navbar from "./Components/Navbar";
import WeatherDetails from "./Components/WeatherDetails";
import RandomWeather from "./Components/RandomWeather";
import Footer from "./Components/Footer";
import About from "./Components/About"
import './Styles/App.css';

function App() {

  const [weatherData, setWeatherData] = useState([]);
  const id = "564c2c76a3c7922755d98d9c6f2a44bc";
  const unit = "metric";
  
  const handleWeatherFinder = async (e)=>{
    e.preventDefault();
    const cityName = e.target.cityName.value;
    console.log(cityName);

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + id + "&units=" + unit;
    
    await axios.get(url)
      .then(res => {
        const data = res.data;
        //console.log(data.main.temp);
        const temp = data.main.temp;
        const icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
        const weatherDesc = data.weather[0].description;
        const avgTemp = data.main.feels_like;
        const lon = data.coord.lon;
        const lat = data.coord.lat;
        const humidity = data.main.humidity;
        const city = data.name;
        //console.log(temp, icon, weatherDesc);
        console.log(data.name);
        setWeatherData([temp, icon, weatherDesc, avgTemp, lon, lat, humidity, city]);
        
      })
      .catch(err => {
        console.log(err);
      }
    );
  }

  const handleCurrentCity = ()=> {
    console.log('success');
    if('geolocation' in navigator){
      console.log('available');
      navigator.geolocation.getCurrentPosition((position)=>{
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        //console.log(lon, lat);

        const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + id + "&units=" + unit;
        
        axios.get(url)
          .then(res => {
            const data = res.data;
            console.log(data);
            const temp = data.main.temp;
            const icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            const weatherDesc = data.weather[0].description;
            const avgTemp = data.main.feels_like;
            const lon = data.coord.lon;
            const lat = data.coord.lat;
            const humidity = data.main.humidity;
            const city = data.name;
            //console.log(temp, icon, weatherDesc,city);
            setWeatherData([temp, icon, weatherDesc, avgTemp, lon, lat, humidity, city]);
          })
          .catch(err => {
            console.log(err);
          }
        );

      }, (error)=> {
        console.log(error);
      })
    }else{
      console.log('Not available');
    }
  };

  return (
    <div className="App">
      {/* <Navbar handleWeatherFinder={handleWeatherFinder} />
      <WeatherDetails handleWeatherFinder={handleWeatherFinder} handleCurrentCity={handleCurrentCity} weatherData={weatherData} />
      <div className="row container randomCity my-5">
        <RandomWeather city='Paris' />
        <RandomWeather city='Delhi' />
        <RandomWeather city='Patna' />
        <RandomWeather city='Bangalore' />
      </div>
      <Footer/> */}

      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={
              <>
                <Navbar handleWeatherFinder={handleWeatherFinder} /> 
                <WeatherDetails handleWeatherFinder={handleWeatherFinder} handleCurrentCity={handleCurrentCity} weatherData={weatherData} />
                <div className="row container randomCity my-5">
                  <RandomWeather city='Paris' />
                  <RandomWeather city='Delhi' />
                  <RandomWeather city='Patna' />
                  <RandomWeather city='Bangalore' />
                </div>
                <Footer /> 
              </> 
            }/>
            
            <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

