import MiddleReSa from '../Saga/MiddleReSa'
import GetDataSearchReducer from '../Reducer/GetDataSearchReducer'
import GetLatLonReducer from '../Reducer/GetLatLonReducer'
import GetNameCityReducer from '../Reducer/GetNameCityReducer'

import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from 'redux'


var redux = require("redux") 
const allReducer = redux.combineReducers({ 
  SearRdc: GetDataSearchReducer,
  LatlonRdc: GetLatLonReducer,
  NameCtRdc: GetNameCityReducer
}) 


const sagaMiddleware = createSagaMiddleware() 
const store = redux.createStore( 
 allReducer, 
 applyMiddleware(sagaMiddleware) 
) 
export default store; 
sagaMiddleware.run(MiddleReSa) 