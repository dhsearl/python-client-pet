import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios'

function* addOwnerSaga(action) {
    try {
        yield axios.post(`/owner/`, action.payload)
        yield put({type:'FETCH_OWNER'})
    }
    catch{
        console.log("Error in POST");
    }
}
function* fetchOwnerSaga() {
    try {
        const owners = yield axios.get(`/owner/`) 
        yield put({ type: "SET_OWNERS", payload: owners.data })
    }
    catch{
        console.log("Error in GET");
    }
}
function* deleteOwnerSaga(action) {
    try {
        yield axios.delete(`/owner/?id=${action.payload}`)
        yield put({type:'FETCH_OWNER'})
    }
    catch{
        console.log("Error in DELETE");
    }
}
function* addPetSaga(action) {
    try {
        yield axios.post(`/pets/`, action.payload)
        yield put({type:'FETCH_PETS'})
    }
    catch{
        console.log("Error in add pets POST");
    }
}
function* fetchPetsSaga() {
    try {
        console.log("in FETCH PETS");
        
        const pets = yield axios.get(`/pets/`)
        yield put ({ type: 'SET_PETS', payload: pets.data})
    }
    catch{
        console.log("error in GET pets");
    }
}


function* rootSaga() {
    yield takeEvery('ADD_PET', addPetSaga);
    yield takeEvery('FETCH_PETS', fetchPetsSaga);
    yield takeEvery('ADD_OWNER', addOwnerSaga);
    yield takeEvery('FETCH_OWNER', fetchOwnerSaga);
    yield takeEvery('DELETE_OWNER', deleteOwnerSaga);
}

export default rootSaga;