// Root reducer

import {combineReducers} from 'redux'; // for all the reducers
import logReducer from './logReducer'
import techReducer from './techReducer'

export default combineReducers({
    //take an object with all the reducers
    log: logReducer,
    tech: techReducer
})