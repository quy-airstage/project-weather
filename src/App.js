import React, { Component } from 'react'
import { connect } from 'react-redux/es/exports'
import './App.css'

import SearchInfo from './Components/Contents/SearchInfo/SearchInfo'
import SearchInput from './Components/Contents/SearchInput/SearchInput'
class App extends Component {
  render() {
    return (
      <div className='main'>
        <SearchInput/>
        <SearchInfo/>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginFunc: (type, payload) => {
      dispatch({ type: "Login" })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)