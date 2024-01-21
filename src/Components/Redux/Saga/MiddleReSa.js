import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
const apikey = '439d4b804bc8187953eb36d2a8c26a02';
// var res = await fetch(`https://openweathermap.org/data/2.5/onecall?lat=${lsOcik.lat}&lon=${lsOcik.lon}&appid=${apikey}`)
// var res = await fetch(`https://openweathermap.org/data/2.5/find?q=${key}&appid=${apikey}`)


async function GetDataSearch(key) {
    var res = await fetch(`https://openweathermap.org/data/2.5/find?q=${key}&appid=${apikey}`)
    var data = await res.json();
    console.log(data);
    return data;
}
function* getDataSearch({ payload }) {
    yield delay(1000);
    console.log(payload);
    var data = yield call(GetDataSearch, payload);
    yield put({ type: "GetDataApi", payload: data });
}


async function GetLatLon(lsOcik) {
    console.log(lsOcik);

    var res = await fetch(`https://openweathermap.org/data/2.5/onecall?lat=${lsOcik.lat}&lon=${lsOcik.lon}&appid=${apikey}`)
    var data = await res.json();
    console.log(data);
    return data;
}
function* getLatLon({ payload }) {
    console.log(payload);
    var data = yield call(GetLatLon, payload);
    yield put({ type: "GetLatLonApi", payload: data });
}


async function GetNameCity(name) {
    var nameCity = name
    console.log(nameCity);
    return nameCity;
}
function* getNameCity({ payload }) {
    console.log(payload);
    var data = yield call(GetNameCity, payload);
    yield put({ type: "GetNamecity", payload: data });
}



function* mySaga() {
    yield takeLatest("search", getDataSearch)
    yield takeEvery("getLatLon", getLatLon)
    yield takeEvery("getNameCitySaga", getNameCity)
    

}
export default mySaga;
