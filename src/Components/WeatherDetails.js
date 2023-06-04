import React from 'react'
import '../Styles/WeatherDetails.css';

export default function WeatherDetails(props) {
    
  return (
    <div className=' row mt-5 page1'>
        <div className='col-md col-12 py-4 city-search'>
            <h1 className='text-center'>Find your Weather</h1>
            <form onSubmit={props.handleWeatherFinder} className="row my-3">
                <div className="col-md-7 col-6">
                    <input type="text" className="form-control" name="cityName" id="cityName" placeholder='city name'/>
                </div>
                <div className='col-md-3 col-4 search-button'>
                    <button type="submit" className="btn btn-dark">Get Weather</button>
                </div>  
                <div className='col-md-1 col-1 loc-icon'>
                    <button type='button' className='btn btn-outline-dark' onClick={props.handleCurrentCity}><i className="fa fa-map-marker" aria-hidden="true"></i></button>
                </div>          
            </form>
            
            
            <div className='row weather-result ms-3 mt-4'>
                <div className='col col-6 temp text-center p'>
                    <h1>{props.weatherData[0]}&#176;C</h1>
                    <img src={props.weatherData[1]} alt="weather icon"/>
                    <h6 className='text-center'>{props.weatherData[7]}</h6>
                </div>
                <div className='col-md col-6 location'>
                    <h3>{props.weatherData[2]}</h3>
                    <p>Lon: {props.weatherData[4]} Lat: {props.weatherData[5]} <br/> Avg Temp: {props.weatherData[3]}&#176;C <br/> Humidity: {props.weatherData[6]}% </p>
                </div>
            </div>
        </div>

        <div className='col-md col-12 weather-image'>
            <img src="https://media.istockphoto.com/photos/weather-forecast-concept-picture-id531889697?b=1&k=20&m=531889697&s=170667a&w=0&h=imZl8VcPhgj-6jTFFkYGbVTFOTyQ-u93Z9WsyhMdqps=" className="" alt="..." />
        </div>
    </div>
  )
}