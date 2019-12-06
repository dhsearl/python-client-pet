import { combineReducers } from 'redux';

const owners = (state =[{}],action ) =>{
    if (action.type ==='SET_OWNERS'){
        return action.payload
    } 
    else return state
}
const pets = (state =[], action) => {
    if (action.type ==='SET_PETS'){
        return action.payload
    }
    else return state
}

const rootReducer = combineReducers({
    owners,
    pets,
});

export default rootReducer;