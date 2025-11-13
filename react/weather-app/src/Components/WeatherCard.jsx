import React from 'react'
import './styles.css'

function WeatherCard({data}) {
  console.log(data);
  return (
    <div id='card'>
      <img src={data?.current.weather_icons} alt="" />
      <h4>City:{data?.location?.name} </h4> <h4>country:{data?.location?.country}</h4>
      <h3>Current Temp: {data?.current?.temperature}</h3>
    </div>
  )
}

export default WeatherCard