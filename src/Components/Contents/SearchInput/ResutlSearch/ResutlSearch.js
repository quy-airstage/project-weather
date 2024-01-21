import React from 'react'
import { connect } from 'react-redux/es/exports'
import './ResutlSearch.css'


function ResutlSearch(props) {
  const HandleOnck = (event, lat, lon, city) => {
    var latLon = {
      "lat": lat,
      "lon": lon
    }
    props.GetLatLonSagaFunc(latLon)
    var cityName = {
      "nameCity": city
    }
    props.GetCitySagaFunc(cityName)


  }
  return (
    <div className='resutl'>
      {props.SearRdc.lsSear?.list.map((v, k) => {
        return (
          <div key={k} className='box_info_search' onClick={(event) => { HandleOnck(event, v.coord.lat, v.coord.lon, v.name) }}>
            <h3><img src={`https://openweathermap.org/images/flags/${(v.sys.country).toLowerCase()}.png`} /> {v.name}</h3>
            <p><span>{(v.main.temp - 273.15).toFixed(0)}°C</span> temperature form {(v.main.temp_min - 273.15).toFixed(0)} to {(v.main.temp_max - 273.15).toFixed(0)}°C wind {v.wind.speed} m/s, clouds {v.clouds.all}%</p>
            <p>Geo coords [{v.coord.lat}, {v.coord.lon}]</p>
          </div>
        )
      })}
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    SearRdc: state.SearRdc

  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    GetLatLonSagaFunc: (ls) => {
      console.log(ls);
      dispatch({ type: "getLatLon", payload: ls })
    },
    GetCitySagaFunc: (name) => {
      console.log(name);
      dispatch({ type: "getNameCitySaga", payload: name })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResutlSearch)
