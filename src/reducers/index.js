// Root reducer

import {combineReducers} from 'redux'; // for all the reducers
import logReducer from './logReducer'

export default combineReducers({
    //take an object with all the reducers
    log: logReducer
})