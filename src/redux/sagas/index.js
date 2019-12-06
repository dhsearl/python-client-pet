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


function* rootSaga() {
    yield takeEvery('ADD_OWNER', addOwnerSaga);
    yield takeEvery('FETCH_OWNER', fetchOwnerSaga);
    yield takeEvery('DELETE_OWNER', deleteOwnerSaga);
}

export default rootSaga;