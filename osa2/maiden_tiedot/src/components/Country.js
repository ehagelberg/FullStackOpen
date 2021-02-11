import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({country}) => {
    
    const [weather, setWeather] = useState({current: {temperature: 0, wind_speed: 0}, wind_dir: "NE", weather_icons: "../logo.svg"})
    
    useEffect(()=>{
        axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`).then(res => {    
            console.log(country)
            setWeather(res.data)
        })
      }, [])
      
    console.log('sää', weather)
    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>Spoken languages</h2>
            <ul>
                {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
            </ul>
            <img src={country.flag} alt="flag" width="200" height="150"></img>
            <h2>Weather in {country.capital}</h2>
            <p><b>temperature:</b> {weather.current.temperature}</p>
            <img src={weather.current.weather_icons}></img>
            <p><b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
        </div> 
    )
}

export default Country