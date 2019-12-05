import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios'

function* addOwnerSaga(action) {
    try {
        yield axios.post(`/owners`, action.payload)
    }
    catch{
        console.log("Error in post");
    }
}
function* fetchOwnerSaga() {
    try {
        const owners = yield axios.get(`/owners`)
        yield put({ type: "SET_OWNERS", payload: owners })
    }
    catch{
        console.log("Error in get");
    }
}
function* deleteOwnerSaga(action) {
    try {
        yield axios.delete(`/owners/id=${action.payload.owner_id}`)
    }
    catch{
        console.log("Error in get");
    }
}


function* rootSaga() {
    yield takeEvery('ADD_OWNER', addOwnerSaga);
    yield takeEvery('FETCH_OWNER', fetchOwnerSaga);
    yield takeEvery('DELETE_OWNER', deleteOwnerSaga);
}

export default rootSaga;