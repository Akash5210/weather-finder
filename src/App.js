import axios from "axios";
import { useState } from  "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./Components/Navbar";
import WeatherDetails from "./Components/WeatherDetails";
import RandomWeather from "./Components/RandomWeather";
import Footer from "./Components/Footer";
import About from "./Components/About";

import './Styles/App.css';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const urlVariable = {
    id: "564c2c76a3c7922755d98d9c6f2a44bc",
    unit: "metric",
    link: "https://api.openweathermap.org/data/2.5/weather?q=",
    weatherLink: function(city){
      return (this.link + city + "&appid=" + this.id + "&units=" + this.unit);
    }
  }
  const defaultCities = ["Paris","Delhi","Patna","Bangalore"];
  const socialMedia = [
    {link: "https://www.facebook.com/Akashkumar0125", icon: "" },
    {link: "https://www.instagram.com/itsakshah/", icon: ""},
    {link: "https://twitter.com/Akash01raj", icon: ""},    
    {link: "https://github.com/Akash5210", icon: ""},
    {link: "https://www.linkedin.com/in/akash5210/", icon: ""}
  ];

  const fetchedDetails = (fetchedData)=>{
    const {temp, feels_like, humidity} = fetchedData.main;
    const weatherDesc = fetchedData.weather[0].description;
    const {lon, lat} = fetchedData.coord;
    const city = fetchedData.name;
    const icon = "http://openweathermap.org/img/wn/" + fetchedData.weather[0].icon + "@2x.png";
    console.log(city);

    setWeatherData([temp, icon, weatherDesc, feels_like, lon, lat, humidity, city]);
  }

  const handleWeatherFinder = async (e)=>{
    e.preventDefault();
    const cityName = e.target.cityName.value;
    const url = urlVariable.weatherLink(cityName);
    
    await axios.get(url)
      .then(res => {
        fetchedDetails(res.data);
      })
      .catch(err => {
        console.log(err);
      }
    );
  }

  const handleCurrentCity = ()=> {
    console.log('waiting for GPS');
    if('geolocation' in navigator){
      console.log('GPS access provided');
      navigator.geolocation.getCurrentPosition((position)=>{
        const {latitude, longitude} = position.coords;
        const url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${urlVariable.id}&units=${urlVariable.unit}`;
        
        axios.get(url)
          .then(res => {
            fetchedDetails(res.data);
          })
          .catch(err => {
            console.log(err);
          }
        );

      }, (error)=> {
        console.log(error);
      })
    }else
      console.log('GPS access revoked');
  };

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={
              <>
                <Navbar handleWeatherFinder={handleWeatherFinder} /> 
                <WeatherDetails 
                  handleWeatherFinder={handleWeatherFinder} 
                  handleCurrentCity={handleCurrentCity} 
                  weatherData={weatherData} 
                />
                <div className="row container randomCity my-5">
                  {defaultCities.map(item => <RandomWeather city={item} urlVariable={urlVariable} /> )}
                </div>
                <Footer socialMedia={socialMedia}/> 
              </> 
            }/>
            <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

