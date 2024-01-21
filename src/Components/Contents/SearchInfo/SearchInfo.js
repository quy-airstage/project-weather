import React, { useState } from 'react'
import { connect } from 'react-redux/es/exports'
import './SearchInfo.css'


function SearchInfo(props) {
  const formatAMPM = (dt) => {
    var date = new Date(dt * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    var strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
  };
  const formatDMY = (dt) => {
    var date = new Date(dt * 1000);
    let dayWeek = date.toLocaleString('en-us', { weekday: 'long' });
    let day = date.getDate();
    let month = date.toLocaleString('default', { month: 'long' });
    let year = date.getFullYear();
    day = day < 10 ? `0${day}` : day;
    var strTime = `${dayWeek}, ${day} ${month}, ${year}`;
    return strTime;
  };
  const [dt, HandleInfoDay] = useState();

    

  return (
    <div className='search_info'>
      {props.LatlonRdc.lsLatlon != null && <div className='time'>
        <h1>{formatAMPM(props.LatlonRdc.lsLatlon.current.dt)}</h1>
        <b>{formatDMY(props.LatlonRdc.lsLatlon.current.dt)}</b>
        <h1>Welcome to {props.NameCtRdc.NameCt?.nameCity}</h1>
      </div>}
      <div className='days'>
        {props.LatlonRdc.lsLatlon?.daily.map((v, k) => {
          return (
            <div className='day' key={k} onClick={() => { HandleInfoDay(v.dt) }}>
              <img src={`https://openweathermap.org/img/wn/${v.weather[0].icon}@2x.png`} />
              <h3>{new Date(v.dt * 1000).toLocaleString('en-us', { weekday: 'short' })}</h3>
              <h6>{v.temp.day}°</h6>
            </div>
          )
        })}
      </div>
      {props.LatlonRdc.lsLatlon?.daily.map((v2, k2) => {
        if (dt === v2.dt) {
          return(
            <div key={k2}>
            {console.log(dt)}
            <h1>{new Date(v2.dt * 1000).toLocaleString('en-us', { weekday: 'long' })}</h1>
            <div className='info_day'>
              <div>
                <h3>Sun and Moon</h3>
                <p>Sunrise: {formatAMPM(v2.sunrise)}</p>
                <p>Sunset: {formatAMPM(v2.sunset)}</p>
                <p>Moonrise: {formatAMPM(v2.moonrise)}</p>
                <p>Moonset: {formatAMPM(v2.moonset)}</p>
              </div>
              <div>
                <h3>Temperature</h3>
                <p>Day: {v2.temp.morn}°C</p>
                <p>Min:{v2.temp.min}°C</p>
                <p>Max: {v2.temp.max}°C</p>
                <p>Night: {v2.temp.night}°C</p>
              </div>
              <div>
                <h3>Feels like</h3>
                <p>Day: {v2.feels_like.day}°C</p>
                <p>Night: {v2.feels_like.night}°C</p>
                <p>Evening: {v2.feels_like.eve}°C</p>
                <p>Morning: {v2.feels_like.morn}°C</p>
              </div>
              <div>
                <h3>Other</h3>
                <p>Wind degrees: {v2.wind_deg}°</p>
                <p>Wind speed: {v2.wind_speed}m/s</p>
                <p>Cloud:{v2.clouds}%</p>
                <p>UV: {v2.uvi}</p>
              </div>
            </div>
          </div>
          )
        }
      })
      }
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    SearRdc: state.SearRdc,
    LatlonRdc: state.LatlonRdc,
    NameCtRdc: state.NameCtRdc
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginFunc: (type, payload) => {
      dispatch({ type: "Login" })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchInfo)